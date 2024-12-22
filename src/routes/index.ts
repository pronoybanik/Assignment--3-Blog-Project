import { Router } from 'express';
import { UserRoute } from '../modules/user/user.routes';
import { BlogsRoute } from '../modules/blogs/blog.routes';
import { AdminRoute } from '../modules/admin/admin.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    router: UserRoute,
  },
  {
    path: '/blogs',
    router: BlogsRoute,
  },
  {
    path: '/admin',
    router: AdminRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
