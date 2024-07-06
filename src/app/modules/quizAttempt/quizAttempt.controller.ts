import { Request, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IQuizAttempt } from './quizAttempt.interface';
import { QuizAttemptService } from './quizAttempt.service';
const createQuizAttempt = catchAsync(async (req: Request, res: Response) => {
  const { ...questionData } = req.body;
  const result = await QuizAttemptService.createQuizAttempt(questionData);

  sendResponse<IQuizAttempt>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'QuizAttempt created successfully',
    data: result,
  });
});

const getAllQuizAttempt = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizAttemptService.getAllQuizAttempt();

  sendResponse<IQuizAttempt[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'QuizAttempt fetched successfully',
  });
});

const getSingleQuizAttempt = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuizAttemptService.getSingleQuizAttempt(id);

  sendResponse<IQuizAttempt>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'QuizAttempt fetched successfully',
    data: result,
  });
});

const updateQuizAttempt = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuizAttemptService.updateQuizAttempt(id, req.body);

  sendResponse<IQuizAttempt>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'QuizAttempt updated successfully',
    data: result,
  });
});

const deleteQuizAttempt = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuizAttemptService.deleteQuizAttempt(id);

  sendResponse<IQuizAttempt>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'QuizAttempt deleted successfully',
    data: result,
  });
});

export const QuizAttemptController = {
  getAllQuizAttempt,
  getSingleQuizAttempt,
  updateQuizAttempt,
  deleteQuizAttempt,
  createQuizAttempt,
};
