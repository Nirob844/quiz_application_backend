import express from 'express';
import { QuizAttemptController } from './quizAttempt.controller';

const router = express.Router();

router.post('', QuizAttemptController.createQuizAttempt);

router.get('/:id', QuizAttemptController.getSingleQuizAttempt);

router.patch('/:id', QuizAttemptController.updateQuizAttempt);

router.delete('/:id', QuizAttemptController.deleteQuizAttempt);

router.get('/', QuizAttemptController.getAllQuizAttempt);

export const QuizAttemptRoutes = router;
