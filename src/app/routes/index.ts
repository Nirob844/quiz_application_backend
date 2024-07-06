import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { QuestionRoutes } from '../modules/questions/questions.route';
import { QuizRoutes } from '../modules/quiz/quiz.route';
import { QuizAttemptRoutes } from '../modules/quizAttempt/quizAttempt.route';
import { UserRoutes } from '../modules/users/user.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/questions',
    route: QuestionRoutes,
  },
  {
    path: '/quizzes',
    route: QuizRoutes,
  },
  {
    path: '/quiz_attempts',
    route: QuizAttemptRoutes,
  },
];
moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
