import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProfileUseCase } from './use-case';

export class CreateProfileController {
  async handle(req: Request, res: Response) {
    const {
      name,
      email,
      dateOfBirth,
      gender,
      weight,
      height,
      favoriteTrainingMoment,
      trainingTime
    } = req.body;

    const { userId } = req;

    const createProfileUseCase = container.resolve(CreateProfileUseCase);

    await createProfileUseCase.execute({
      userId,
      name,
      email,
      dateOfBirth,
      gender,
      weight,
      height,
      favoriteTrainingMoment,
      trainingTime
    });

    return res.status(201).json({ message: `profile for user ${name} successfully created` });
  }
}