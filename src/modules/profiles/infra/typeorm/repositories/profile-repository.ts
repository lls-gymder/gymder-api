import { Repository } from 'typeorm';
import PostgresDataSource from '@database/index';
import { Profile } from '@modules/profiles/infra/typeorm/entities/profile';
import { IProfileRepository } from '@modules/profiles/repositories/IProfileRepository';
import { IProfileDTO } from '@modules/profiles/dtos/IProfileDTO';


export class ProfilesRepository implements IProfileRepository {

  private repository: Repository<Profile>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(Profile);
  }

  async edit(data: IProfileDTO): Promise<Profile> {
    throw new Error('Method not implemented.');
  }

  async create(data: IProfileDTO): Promise<Profile> {
    const profile = this.repository.create(data);

    return await this.repository.save(profile);
  }

  async findByUserId(userId: string): Promise<Profile | null> {
    return await this.repository.findOne({ where: { userId } });
  }
}