import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './use-case';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, password, email } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ name, password, email });

    return res.status(201).json({ message: `user ${name} successfully created` });
  }
}