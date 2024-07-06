import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UsersController } from './user.controller';

const router = express.Router();

router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  UsersController.getUserProfile
);
router.patch(
  'profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  UsersController.updateUserProfile
);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UsersController.getSingleUser);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UsersController.updateUser);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UsersController.deleteUser);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), UsersController.getAllUsers);

export const UserRoutes = router;
