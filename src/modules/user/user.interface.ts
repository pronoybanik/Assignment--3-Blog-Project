import { Model } from 'mongoose';
import { USER_ROLE } from './user.container';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TUserRole = keyof typeof USER_ROLE;
