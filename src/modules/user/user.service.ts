import config from '../../config';
import AppError from '../../middlewares/AppError';
import { TUser } from './user.interface';
import UserModel from './user.module';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';

const createUserIntoDB = async (payload: TUser) => {
  const result = UserModel.create(payload);
  return result;
};
const getAllUserFromDB = async () => {
  const result = UserModel.find();
  return result;
};

const loginUser = async (payload: TUser) => {
  // check of the user in exist

  const { email, password } = payload;
  const user = await UserModel.findOne({ email, password });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is blocked
  const userStatus = user?.isBlocked;
  if (userStatus === true) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  //create token and sent to the  client

  const jwtPayload = {
    userId: user._id,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  return {
    accessToken,
  };
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  loginUser,
};
