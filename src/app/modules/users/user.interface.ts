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

export type UserModel = Model<IUser>;
