import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IQuizAttempt } from './quizAttempt.interface';
import { QuizAttempt } from './quizAttempt.model';

const createQuizAttempt = async (
  question: IQuizAttempt
): Promise<IQuizAttempt | null> => {
  const createdQuizAttempt = await QuizAttempt.create(question);

  if (!createdQuizAttempt) {
    throw new ApiError(400, 'failed to create QuizAttempt !');
  }
  return createdQuizAttempt;
};

const getAllQuizAttempt = async (): Promise<IQuizAttempt[] | null> => {
  const result = await QuizAttempt.find({});
  return result;
};

const getSingleQuizAttempt = async (
  id: string
): Promise<IQuizAttempt | null> => {
  const result = await QuizAttempt.findById(id).populate(
    'quiz',
    'question',
    'user'
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'QuizAttempt not found');
  }
  return result;
};

const updateQuizAttempt = async (
  id: string,
  payload: Partial<IQuizAttempt>
): Promise<IQuizAttempt | null> => {
  const quizAttempt = await QuizAttempt.findById(id);
  if (!quizAttempt) {
    throw new ApiError(httpStatus.NOT_FOUND, 'QuizAttempt not found');
  }

  const result = await QuizAttempt.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteQuizAttempt = async (id: string): Promise<IQuizAttempt | null> => {
  const quizAttempt = await QuizAttempt.findById(id);
  if (!quizAttempt) {
    throw new ApiError(httpStatus.NOT_FOUND, 'QuizAttempt not found');
  }
  const result = await QuizAttempt.findByIdAndDelete(id);
  return result;
};

export const QuizAttemptService = {
  createQuizAttempt,
  getAllQuizAttempt,
  getSingleQuizAttempt,
  updateQuizAttempt,
  deleteQuizAttempt,
};
