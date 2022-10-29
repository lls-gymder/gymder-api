import 'reflect-metadata';
import express, { Request, Response } from 'express';
import 'express-async-errors';

import { errorHandler } from '@middlewares/error-handler';
import router from './routes';

import './database';
import './shared/tsyringe-container';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => (res.send('this is working somehow')));

export default app;