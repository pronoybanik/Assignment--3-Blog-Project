import { IBlogs } from './blog.interface';
import { BlogsModel } from './blog.module';

const createBlogsIntoDB = async (payload: IBlogs) => {
  const result = BlogsModel.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = BlogsModel.find().populate('author');
  return result;
};

export const BlogsServices = {
  createBlogsIntoDB,
  getAllBlogsFromDB,
};
