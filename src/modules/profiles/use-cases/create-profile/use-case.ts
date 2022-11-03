import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { IProfileRepository } from '@modules/profiles/repositories/IProfileRepository';
import { IProfileDTO } from '@modules/profiles/dtos/IProfileDTO';
import { Profile } from '@modules/profiles/infra/typeorm/entities/profile';


@injectable()
export class CreateProfileUseCase {

  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfileRepository
  ) { }

  async execute(data: IProfileDTO): Promise<Profile> {
    const user = await this.profilesRepository.findByUserId(data.userId);

    if (user)
      throw new AppError('id already registered, you should run an update instead (PATCH)', 404);

    return await this.profilesRepository.create(data);
  }
}