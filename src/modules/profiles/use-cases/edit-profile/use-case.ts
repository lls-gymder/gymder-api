import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { IProfileRepository } from '@modules/profiles/repositories/IProfileRepository';
import { IProfileDTO } from '@modules/profiles/dtos/IProfileDTO';
import { Profile } from '@modules/profiles/infra/typeorm/entities/profile';


@injectable()
export class EditProfileUseCase {

  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfileRepository
  ) { }

  async execute(data: Partial<IProfileDTO>): Promise<Profile> {
    if (!data.userId)
      throw new AppError('user id is missing');

    const user = await this.profilesRepository.findByUserId(data.userId);

    if (user)
      throw new AppError('id already registered, you should run an update instead (PATCH)', 404);

    return await this.profilesRepository.edit(data);
  }
}