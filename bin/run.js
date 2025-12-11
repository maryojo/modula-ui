#!/usr/bin/env node

import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.join(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0];

const getPackageManager = async () => {
  const userRoot = process.cwd();
  try {
    await fs.access(path.join(userRoot, 'pnpm-lock.yaml'));
    return 'pnpm';
  } catch {}
  try {
    await fs.access(path.join(userRoot, 'yarn.lock'));
    return 'yarn';
  } catch {}
  try {
    await fs.access(path.join(userRoot, 'bun.lockb'));
    return 'bun';
  } catch {}
  return 'npm';
};

const installDependencies = async (dependencies) => {
  if (!dependencies || dependencies.length === 0) return;
  
  const pm = await getPackageManager();
  const installCmd = pm === 'npm' ? 'install' : 'add';
  const cmd = `${pm} ${installCmd} ${dependencies.join(' ')}`;
  
  console.log(`\n📦 Installing dependencies: ${dependencies.join(', ')}...`);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
    console.log('✅ Dependencies installed.');
  } catch (error) {
    console.error('❌ Failed to install dependencies.');
    // Don't exit, just warn
  }
};

const installRegistryDependencies = (dependencies) => {
  if (!dependencies || dependencies.length === 0) return;

  console.log(`\n🎨 Installing UI components: ${dependencies.join(', ')}...`);
  try {
    // Attempt to use shadcn CLI
    // We add -y to accept defaults if possible, but shadcn might still prompt
    execSync(`npx shadcn@latest add ${dependencies.join(' ')} -y`, { stdio: 'inherit', cwd: process.cwd() });
    console.log('✅ UI components installed.');
  } catch (error) {
    console.warn('⚠️  Failed to install UI components via shadcn. You might need to install them manually.');
    console.warn(`   Run: npx shadcn@latest add ${dependencies.join(' ')}`);
  }
};

if (command === 'add') {
  const componentName = args[1];
  
  if (!componentName) {
    console.error('Please specify a component name: npx modula-ui add <component-name>');
    process.exit(1);
  }

  try {
    const registryPath = path.join(packageRoot, 'registry.json');
    const registryContent = await fs.readFile(registryPath, 'utf-8');
    const registry = JSON.parse(registryContent);

    const component = registry[componentName];

    if (!component) {
      console.error(`Component "${componentName}" not found in registry.`);
      console.log('Available components:', Object.keys(registry).join(', '));
      process.exit(1);
    }

    // 1. Install External Dependencies
    if (component.dependencies) {
      await installDependencies(component.dependencies);
    }

    // 2. Install Registry Dependencies (Shadcn components)
    if (component.registryDependencies) {
      installRegistryDependencies(component.registryDependencies);
    }

    // 3. Copy Files
    const filesToCopy = component.files || [component.path];
    
    // Determine destination directory
    const userProjectRoot = process.cwd();
    const hasSrc = await fs.access(path.join(userProjectRoot, 'src')).then(() => true).catch(() => false);
    
    const destDir = hasSrc 
      ? path.join(userProjectRoot, 'src', 'library', component.type)
      : path.join(userProjectRoot, 'library', component.type);

    // Ensure destination directory exists
    await fs.mkdir(destDir, { recursive: true });

    for (const filePath of filesToCopy) {
      const sourcePath = path.join(packageRoot, filePath);
      const fileName = path.basename(sourcePath);
      const destPath = path.join(destDir, fileName);

      // Read and write file
      const content = await fs.readFile(sourcePath, 'utf-8');
      await fs.writeFile(destPath, content);
      
      console.log(`\n✨ Component file ${fileName} added to ${path.relative(userProjectRoot, destPath)}`);
    }

  } catch (error) {
    console.error('Error adding component:', error);
    process.exit(1);
  }

} else {
  // Default behavior: Start the Next.js server
  const port = 3177;
  const dev = false;
  const app = next({ dev, dir: packageRoot });
  const handle = app.getRequestHandler();

  await app.prepare();

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`
    Your UI Library is LIVE! 
    Open → http://localhost:${port}
    
    Click any component → Copy code → Paste into your project!
    
    Press Ctrl+C to stop
    `);
  });
}