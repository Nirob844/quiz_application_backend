import express from 'express';
import { UsersController } from './user.controller';

const router = express.Router();

router.get('/my-profile', UsersController.getUserProfile);
router.patch('/my-profile', UsersController.updateUserProfile);
router.get('/:id', UsersController.getSingleUser);
router.patch('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);
router.get('/', UsersController.getAllUsers);

export const UserRoutes = router;
