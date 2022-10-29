import express from 'express';
import { usersRoutes } from './users.routes';

const router = express();

router.use('/users', usersRoutes);


export default router;