import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IBaseUserDTO } from '@modules/accounts/dtos/IBaseUserDTO';
import { verify } from 'jsonwebtoken';

interface IRequest {
  token: string;
}

interface IPayload {
  sub: string;
}

@injectable()
export class ReadUserUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ token }: IRequest): Promise<IBaseUserDTO> {
    const secretToken = process.env.SECRET_TOKEN ?? 'random string';

    try {
      const { sub } = verify(token, secretToken) as IPayload;

      const user = await this.usersRepository.findById(sub);

      if (!user)
        throw new AppError('invalid token', 401);


      return {
        email: user.email,
        name: user.name,
      };

    } catch (e) {
      throw new AppError('invalid token', 401);
    }
  }
}