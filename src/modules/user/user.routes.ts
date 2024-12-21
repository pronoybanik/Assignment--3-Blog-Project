import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validator';
const routes = express.Router();

routes.post(
  '/register',
  validateRequest(UserValidation.CreateUserValidationSchema),
  UserController.createUser,
);
routes.get('/', UserController.getAllUser);

routes.post(
  '/logIn',
  // validateRequest(UserValidation.CreateUserValidationSchema),
  UserController.loginUser,
);

export const UserRoute = routes;
