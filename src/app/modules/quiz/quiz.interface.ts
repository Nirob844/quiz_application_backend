import { Schema } from 'mongoose';

export interface IQuiz extends Document {
  title: string;
  timeLimit: number;
  createdBy: Schema.Types.ObjectId;
}
