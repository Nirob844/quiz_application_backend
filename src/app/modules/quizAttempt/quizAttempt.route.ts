import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizAttemptController } from './quizAttempt.controller';

const router = express.Router();

router.post(
  '',
  auth(ENUM_USER_ROLE.USER),
  QuizAttemptController.createQuizAttempt
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  QuizAttemptController.getSingleQuizAttempt
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuizAttemptController.updateQuizAttempt
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuizAttemptController.deleteQuizAttempt
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  QuizAttemptController.getAllQuizAttempt
);

export const QuizAttemptRoutes = router;
