import { CreateUserController } from '@modules/accounts/use-cases/create-user/controller';
import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.post('/', new CreateUserController().handle);

export { usersRoutes };