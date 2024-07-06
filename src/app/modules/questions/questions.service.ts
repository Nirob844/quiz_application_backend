import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { questionSearchableFields } from './questions.constant';
import { IQuestion, IQuestionFilters } from './questions.interface';
import { Question } from './questions.model';

const createQuestion = async (
  question: IQuestion
): Promise<IQuestion | null> => {
  const createdQuestion = await Question.create(question);

  if (!createdQuestion) {
    throw new ApiError(400, 'failed to create Question !');
  }
  return createdQuestion;
};

const getAllQuestions = async (
  filters: IQuestionFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IQuestion[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: questionSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Question.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Question.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleQuestion = async (id: string): Promise<IQuestion | null> => {
  const result = await Question.findById(id).populate('seller');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
  }
  return result;
};

const updateQuestion = async (
  id: string,
  payload: Partial<IQuestion>
): Promise<IQuestion | null> => {
  const question = await Question.findById(id);
  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
  }

  const result = await Question.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteQuestion = async (id: string): Promise<IQuestion | null> => {
  const question = await Question.findById(id);
  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
  }
  const result = await Question.findByIdAndDelete(id);
  return result;
};

export const QuestionService = {
  createQuestion,
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
};
