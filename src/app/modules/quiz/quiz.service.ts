import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IQuiz } from './quiz.interface';
import { Quiz } from './quiz.model';

const createQuiz = async (question: IQuiz): Promise<IQuiz | null> => {
  const createdQuiz = await Quiz.create(question);

  if (!createdQuiz) {
    throw new ApiError(400, 'failed to create Quiz !');
  }
  return createdQuiz;
};

const getAllQuiz = async (): Promise<IQuiz[] | null> => {
  const result = await Quiz.find({});
  return result;
};

const getSingleQuiz = async (id: string): Promise<IQuiz | null> => {
  const result = await Quiz.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
  }
  return result;
};

const updateQuiz = async (
  id: string,
  payload: Partial<IQuiz>
): Promise<IQuiz | null> => {
  const question = await Quiz.findById(id);
  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
  }

  const result = await Quiz.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteQuiz = async (id: string): Promise<IQuiz | null> => {
  const question = await Quiz.findById(id);
  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not found');
  }
  const result = await Quiz.findByIdAndDelete(id);
  return result;
};

export const QuizService = {
  createQuiz,
  getAllQuiz,
  getSingleQuiz,
  updateQuiz,
  deleteQuiz,
};
