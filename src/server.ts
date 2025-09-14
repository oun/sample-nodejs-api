import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';
import app from './app';

const port = Number(process.env.PORT) || 3000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`✅ API ready on http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
  console.error('UNHANDLED REJECTION:', err);
  process.exit(1);
});
process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION:', err);
  process.exit(1);
});
