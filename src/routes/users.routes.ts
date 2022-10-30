import { AuthenticateUserController } from '@modules/accounts/use-cases/authenticate-user/controller';
import { CreateUserController } from '@modules/accounts/use-cases/create-user/controller';
import { ReadUserController } from '@modules/accounts/use-cases/read-user/controller';
import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.get('/', new ReadUserController().handle);
usersRoutes.post('/', new CreateUserController().handle);
usersRoutes.post('/auth', new AuthenticateUserController().handle);

export { usersRoutes };