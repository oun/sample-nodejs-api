import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

export default app;
