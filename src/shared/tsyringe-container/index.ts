import { container } from 'tsyringe';


import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/user-repository';



container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);