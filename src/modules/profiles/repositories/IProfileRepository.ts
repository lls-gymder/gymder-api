import { IProfileDTO } from '../dtos/IProfileDTO';
import { Profile } from '../infra/typeorm/entities/profile';

export interface IProfileRepository {
  edit(data: Partial<IProfileDTO>): Promise<Profile>;
  create(data: IProfileDTO): Promise<Profile>;
  findByUserId(userId: string): Promise<Profile | null>;
}
