import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import app from './app';
import dotEnv from 'dotenv';

dotEnv.config();

const server = express();

server.use(app);

server.listen(process.env.PORT);

console.info(`app running on port: http://localhost:${process.env.PORT}/`);

