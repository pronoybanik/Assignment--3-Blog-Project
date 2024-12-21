import { IUser } from './user.interface';
import UserModel from './user.module';

const createUserIntoDB = async (payload: IUser) => {
  const result = UserModel.create(payload);
  return result;
};
const getAllUserFromDB = async () => {
  const result = UserModel.find();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
};
