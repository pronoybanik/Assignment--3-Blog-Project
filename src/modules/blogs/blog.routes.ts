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

export const BlogsRoute = routes;
