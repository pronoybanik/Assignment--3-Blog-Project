import express from 'express';
import { blogsControllers } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BlogsValidation } from './blog.validator';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.container';

const routes = express.Router();

routes.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BlogsValidation.CreateBlogValidationSchema),
  blogsControllers.createBlogs,
);
routes.get('/', blogsControllers.getAllBlogs);
routes.patch('/:id', auth(USER_ROLE.user), blogsControllers.updateBlogs);
routes.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  blogsControllers.deleteBlogs,
);

export const BlogsRoute = routes;
