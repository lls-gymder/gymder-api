import express, { Request, Response } from 'express';
import { profilesRoutes } from './profiles.routes';
import { usersRoutes } from './users.routes';

const router = express();

router.use('/user', usersRoutes);
router.use('/profile', profilesRoutes);

router.get('/', (req: Request, res: Response) => (res.send('this is working !')));

export default router;