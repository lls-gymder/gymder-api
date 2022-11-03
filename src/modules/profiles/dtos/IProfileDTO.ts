export interface IProfileDTO {
  userId: string;
  name?: string;
  email?: string;
  dateOfBirth: Date;
  gender: string;
  weight: number;
  height: number;
  favoriteTrainingMoment: string;
  trainingTime: number;
}