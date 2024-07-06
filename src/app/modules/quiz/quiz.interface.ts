import { Schema } from 'mongoose';

export interface IQuiz extends Document {
  title: string;
  questions: Schema.Types.ObjectId[];
  timeLimit: number;
  createdBy: Schema.Types.ObjectId;
}
