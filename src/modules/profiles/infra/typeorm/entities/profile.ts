import { User } from '../../../../accounts/infra/typeorm/entities/user';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';


@Entity('profiles')
export class Profile {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: Date;

  @Column()
  gender: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column({ name: 'favorite_training_moment' })
  favoriteTrainingMoment: string;

  @Column({ name: 'training_time' })
  trainingTime: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id)
      this.id = uuidV4();
  }
}