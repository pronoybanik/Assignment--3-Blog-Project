import { Router } from 'express';
import { UserRoute } from '../modules/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    router: UserRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
