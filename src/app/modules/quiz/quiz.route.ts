import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizController } from './quiz.controller';

const router = express.Router();

router.post('', auth(ENUM_USER_ROLE.ADMIN), QuizController.createQuiz);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  QuizController.getSingleQuiz
);

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), QuizController.updateQuiz);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), QuizController.deleteQuiz);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  QuizController.getAllQuiz
);

export const QuizRoutes = router;
