import { container } from 'tsyringe';


import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/user-repository';

import { ProfilesRepository } from '@modules/profiles/infra/typeorm/repositories/profile-repository';
import { IProfileRepository } from '@modules/profiles/repositories/IProfileRepository';



container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IProfileRepository>('ProfilesRepository', ProfilesRepository);