import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '@errors/AppError';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  password: string;
  email: string;
}

interface IResponse {
  user: {
    name: string,
    email: string,
  },
  token: string,
}

@injectable()
export class AuthenticateUserUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const secretToken = process.env.SECRET_TOKEN ?? 'random string';
    const tokenExpiresIn = process.env.TOKEN_EXPIRES_INT ?? '1d';


    const user = await this.usersRepository.findByEmail(email);

    if (!user)
      throw new AppError('Email or password incorrect', 401);

    if (!await compare(password, user.password))
      throw new AppError('Email or password incorrect', 401);

    const token = sign({}, secretToken, {
      subject: user.id,
      expiresIn: tokenExpiresIn
    });

    return { user: { email: user.email, name: user.name }, token };
  }
}