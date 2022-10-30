import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import { errorHandler } from '@middlewares/error-handler';

import router from './routes';
import dotEnv from 'dotenv';

import './database';
import './shared/tsyringe-container';

dotEnv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use(errorHandler);

app.listen(process.env.PORT);

console.info(`app running on port: http://localhost:${process.env.PORT}/`);

export default app;