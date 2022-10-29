import express from 'express';
import app from './app';
import dotEnv from 'dotenv';

dotEnv.config();

const server = express();

server.use(app);

server.listen(process.env.PORT);

// eslint-disable-next-line no-console
console.info(`app running on port: http://localhost:${process.env.PORT}/`);

