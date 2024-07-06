import { Schema, model } from 'mongoose';
import { IQuizAttempt } from './quizAttempt.interface';

const QuizAttemptSchema = new Schema<IQuizAttempt>({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  answers: [
    {
      questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
      },
      selectedOption: {
        type: String,
        required: true,
      },
    },
  ],
  startTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  score: {
    type: Number,
  },
});

export const QuizAttempt = model<IQuizAttempt>(
  'QuizAttempt',
  QuizAttemptSchema
);
