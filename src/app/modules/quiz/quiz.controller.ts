import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IQuiz } from './quiz.interface';
import { QuizService } from './quiz.service';

const createQuiz = catchAsync(async (req: Request, res: Response) => {
  const { ...questionData } = req.body;
  const user = req.user as JwtPayload;

  const result = await QuizService.createQuiz(questionData, user);

  sendResponse<IQuiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz created successfully',
    data: result,
  });
});

const getAllQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getAllQuiz();

  sendResponse<IQuiz[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz fetched successfully',
    data: result,
  });
});

const getSingleQuiz = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuizService.getSingleQuiz(id);

  sendResponse<IQuiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz fetched successfully',
    data: result,
  });
});

const updateQuiz = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuizService.updateQuiz(id, req.body);

  sendResponse<IQuiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz updated successfully',
    data: result,
  });
});

const deleteQuiz = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuizService.deleteQuiz(id);

  sendResponse<IQuiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz deleted successfully',
    data: result,
  });
});

export const QuizController = {
  getAllQuiz,
  getSingleQuiz,
  updateQuiz,
  deleteQuiz,
  createQuiz,
};
