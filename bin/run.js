#!/usr/bin/env node

import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

const port = 3177;
const dev = false;
const app = next({ dev, dir: import.meta.dirname + '/..' });
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