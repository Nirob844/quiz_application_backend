import { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
  quizId: Schema.Types.ObjectId;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface IQuestionFilters {
  searchTerm?: string;
  questionText?: string;
}
