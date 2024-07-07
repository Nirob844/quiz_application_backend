import { Schema, model } from 'mongoose';
import { IAnswer } from './answer.interface';

const AnswerSchema = new Schema<IAnswer>({
  quizAttemptId: {
    type: Schema.Types.ObjectId,
    ref: 'QuizAttempt',
    required: true,
  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
});

export const Answer = model<IAnswer>('Answer', AnswerSchema);
