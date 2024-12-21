import express from 'express';
import { blogsControllers } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BlogPostValidation } from './blog.validator';

const routes = express.Router();

routes.post(
  '/',
  //   validateRequest(BlogPostValidation.createBlogPostValidationSchema),
  blogsControllers.createBlogs,
);
routes.get('/', blogsControllers.getAllBlogs);

export const BlogsRoute = routes;
