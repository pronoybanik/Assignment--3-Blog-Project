import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from './AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (err) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid or expired token');
    }

    const { role, userId } = decoded;

    if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        'You do not have permission for this action',
      );
    }

    req.user = { userId, role };

    next();
  });
};

export default auth;
