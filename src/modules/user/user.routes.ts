import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validator';
const routes = express.Router();

routes.post(
  '/',
  validateRequest(UserValidation.CreateUserValidationSchema),
  UserController.createCourse,
);
routes.get('/', UserController.getAllCourse);

export const UserRoute = routes;
