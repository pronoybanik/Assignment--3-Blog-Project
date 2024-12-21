import { Router } from 'express';
import { UserRoute } from '../modules/user/user.routes';
import { BlogsRoute } from '../modules/blogs/blog.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    router: UserRoute,
  },
  {
    path: '/blogs',
    router: BlogsRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
