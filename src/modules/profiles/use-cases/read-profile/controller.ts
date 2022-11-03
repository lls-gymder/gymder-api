import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ReadProfileUseCase } from './use-case';

export class ReadProfileController {
  async handle(req: Request, res: Response) {
    const { userId } = req;

    const readProfileUseCase = container.resolve(ReadProfileUseCase);

    const userProfile = await readProfileUseCase.execute(userId);

    return res.status(200).json({ userProfile });
  }
}