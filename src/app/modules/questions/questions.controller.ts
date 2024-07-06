import { Request, Response } from 'express';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';

import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { questionFilterableFields } from './questions.constant';
import { IQuestion } from './questions.interface';
import { QuestionService } from './questions.service';

const createQuestion = catchAsync(async (req: Request, res: Response) => {
  const { ...questionData } = req.body;
  const result = await QuestionService.createQuestion(questionData);

  sendResponse<IQuestion>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Question created successfully',
    data: result,
  });
});

const getAllQuestions = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, questionFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await QuestionService.getAllQuestions(
    filters,
    paginationOptions
  );

  sendResponse<IQuestion[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic departments fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuestionService.getSingleQuestion(id);

  sendResponse<IQuestion>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Question fetched successfully',
    data: result,
  });
});

const updateQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuestionService.updateQuestion(id, req.body);

  sendResponse<IQuestion>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Question updated successfully',
    data: result,
  });
});

const deleteQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuestionService.deleteQuestion(id);

  sendResponse<IQuestion>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Question deleted successfully',
    data: result,
  });
});

export const QuestionController = {
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
  createQuestion,
};
