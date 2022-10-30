import { AppError } from '@errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ReadUserUseCase } from './use-case';

export class ReadUserController {
  async handle(req: Request, res: Response) {
    const authToken = req.headers.authorization;

    const readUserUseCase = container.resolve(ReadUserUseCase);

    if (!authToken)
      throw new AppError('missing token inside header', 404);

    const [, token] = authToken.split(' ');

    const response = await readUserUseCase.execute({ token });

    return res.status(200).json(response);
  }
}