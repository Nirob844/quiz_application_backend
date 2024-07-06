import express from 'express';

import { QuestionController } from './questions.controller';

const router = express.Router();

router.post('', QuestionController.createQuestion);

router.get('/:id', QuestionController.getSingleQuestion);

router.patch('/:id', QuestionController.updateQuestion);

router.delete('/:id', QuestionController.deleteQuestion);

router.get('/', QuestionController.getAllQuestions);

export const QuestionRoutes = router;
