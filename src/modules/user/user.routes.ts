import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validator';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.container';
const routes = express.Router();

routes.post(
  '/register',
  validateRequest(UserValidation.CreateUserValidationSchema),
  UserController.createUser,
);
routes.get('/', UserController.getAllUser);
routes.patch('/:id', auth(USER_ROLE.admin), UserController.updateUser);
routes.post(
  '/logIn',
  validateRequest(UserValidation.loginValidationSchema),
  UserController.loginUser,
);

export const UserRoute = routes;
