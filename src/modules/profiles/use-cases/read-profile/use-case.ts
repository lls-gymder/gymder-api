import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { IProfileRepository } from '@modules/profiles/repositories/IProfileRepository';
import { Profile } from '@modules/profiles/infra/typeorm/entities/profile';


@injectable()
export class ReadProfileUseCase {

  constructor(
    @inject('ProfilesRepository')
    private profilesRepository: IProfileRepository
  ) { }

  async execute(userId: string): Promise<Profile> {
    const userProfile = await this.profilesRepository.findByUserId(userId);

    if (!userProfile)
      throw new AppError(`user not found for id: ${userId}`);

    return userProfile;
  }
}