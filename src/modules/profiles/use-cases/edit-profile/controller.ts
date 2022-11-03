import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EditProfileUseCase } from './use-case';

export class EditProfileController {
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

    const editProfileUseCase = container.resolve(EditProfileUseCase);

    await editProfileUseCase.execute({
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

    return res.status(204).send();
  }
}