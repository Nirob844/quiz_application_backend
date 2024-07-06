import { Schema } from 'mongoose';

export interface IQuizAttempt extends Document {
  quizId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  answers: {
    questionId: Schema.Types.ObjectId;
    selectedOption: string;
  }[];
  startTime: Date;
  endTime?: Date;
  score?: number;
}
