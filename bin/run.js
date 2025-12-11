#!/usr/bin/env node

import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.join(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0];

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

    const sourcePath = path.join(packageRoot, component.path);
    
    // Determine destination path
    // Check if src directory exists in the user's project
    const userProjectRoot = process.cwd();
    const hasSrc = await fs.access(path.join(userProjectRoot, 'src')).then(() => true).catch(() => false);
    
    const destDir = hasSrc 
      ? path.join(userProjectRoot, 'src', 'library', component.type)
      : path.join(userProjectRoot, 'library', component.type);

    const destPath = path.join(destDir, path.basename(sourcePath));

    // Ensure destination directory exists
    await fs.mkdir(destDir, { recursive: true });

    // Read and write file
    const content = await fs.readFile(sourcePath, 'utf-8');
    await fs.writeFile(destPath, content);

    console.log(`✓ Component ${component.name} added to ${path.relative(userProjectRoot, destPath)}`);

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