import express from 'express';
import { adminControllers } from './admin.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.container';
const routes = express.Router();

routes.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  adminControllers.adminBlockUser,
);

routes.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  adminControllers.adminDeleteBlogs,
);

export const AdminRoute = routes;
