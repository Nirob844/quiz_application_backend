import { Document, Model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

export interface IUserFilters {
  searchTerm?: string;
  email?: string;
  fullName?: string;
}

export type UserModel = Model<IUser> & {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'id' | 'password' | 'role' | 'email'> | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
};
