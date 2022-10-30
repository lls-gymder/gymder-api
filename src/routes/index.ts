import express, { Request, Response } from 'express';
import { usersRoutes } from './users.routes';

const router = express();

router.use('/users', usersRoutes);

router.get('/', (req: Request, res: Response) => (res.send('this is working !')));

export default router;