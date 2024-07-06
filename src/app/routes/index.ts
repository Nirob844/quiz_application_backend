import express from 'express';
import { QuestionRoutes } from '../modules/questions/questions.route';
import { UserRoutes } from '../modules/users/user.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/questions',
    route: QuestionRoutes,
  },
];
moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
