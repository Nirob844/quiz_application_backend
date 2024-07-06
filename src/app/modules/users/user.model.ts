import bcrypt from 'bcryptjs';
import { CallbackError, Schema, model } from 'mongoose';
import config from '../../../config';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre('save', async function (next: (err?: CallbackError) => void) {
  if (!this.isModified('password')) return next();
  try {
    const saltRounds = Number(config.bcrypt_salt_rounds) || 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (err) {
    next(err as CallbackError);
  }
});

// Static method to check if user exists
userSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<IUser, 'id' | 'password' | 'role' | 'email'> | null> {
  return await this.findOne(
    { email },
    { _id: 1, password: 1, role: 1, email: 1 }
  );
};

// Static method to check if password matches
userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

export const User = model<IUser, UserModel>('User', userSchema);
