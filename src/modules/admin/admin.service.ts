import { BlogsModel } from '../blogs/blog.module';
import UserModel from '../user/user.module';

const updateBlogIntoDB = async (userId: string) => {
  const user = await UserModel.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    { new: true, runValidators: true },
  );

  // Check if user exists
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

const deleteBlogsIntoDB = async (id: string) => {
  const result = await BlogsModel.deleteOne({ _id: id });
  return result;
};

export const adminServices = {
  updateBlogIntoDB,
  deleteBlogsIntoDB,
};
