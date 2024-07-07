import { Schema } from 'mongoose';

export interface IAnswer extends Document {
  questionId: Schema.Types.ObjectId;
  quizAttemptId: Schema.Types.ObjectId;
  selectedOption: string;
}
