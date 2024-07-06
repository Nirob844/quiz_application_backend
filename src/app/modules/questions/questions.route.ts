import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuestionController } from './questions.controller';

const router = express.Router();

router.post('', auth(ENUM_USER_ROLE.ADMIN), QuestionController.createQuestion);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  QuestionController.getSingleQuestion
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuestionController.updateQuestion
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuestionController.deleteQuestion
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  QuestionController.getAllQuestions
);

export const QuestionRoutes = router;
