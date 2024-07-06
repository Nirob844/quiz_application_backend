import express from 'express';
import { QuizController } from './quiz.controller';

const router = express.Router();

router.post('', QuizController.createQuiz);

router.get('/:id', QuizController.getSingleQuiz);

router.patch('/:id', QuizController.updateQuiz);

router.delete('/:id', QuizController.deleteQuiz);

router.get('/', QuizController.getAllQuiz);

export const QuizRoutes = router;
