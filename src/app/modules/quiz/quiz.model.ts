import { Schema, model } from 'mongoose';
import { IQuiz } from './quiz.interface';

const QuizSchema = new Schema<IQuiz>({
  title: {
    type: String,
    required: true,
  },
  timeLimit: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const Quiz = model<IQuiz>('Quiz', QuizSchema);
