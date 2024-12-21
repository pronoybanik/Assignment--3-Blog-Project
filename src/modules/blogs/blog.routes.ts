import express from 'express';
import { blogsControllers } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BlogsValidation } from './blog.validator';

const routes = express.Router();

routes.post(
  '/',
  validateRequest(BlogsValidation.CreateBlogValidationSchema),
  blogsControllers.createBlogs,
);
routes.get('/', blogsControllers.getAllBlogs);
routes.patch('/:id', blogsControllers.updateBlogs);
routes.delete('/:id', blogsControllers.deleteBlogs);

export const BlogsRoute = routes;
