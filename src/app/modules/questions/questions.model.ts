import { Schema, model } from 'mongoose';
import { IQuestion } from './questions.interface';

const QuestionSchema = new Schema<IQuestion>({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
  },
});

export const Question = model<IQuestion>('Question', QuestionSchema);
