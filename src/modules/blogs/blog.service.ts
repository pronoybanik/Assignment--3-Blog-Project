import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../middlewares/AppError';
import UserModel from '../user/user.module';
import { IBlogs } from './blog.interface';
import { BlogsModel } from './blog.module';
import httpStatus from 'http-status';
import { blogsSearchableFields } from './blogs.constant';

const createBlogsIntoDB = async (payload: IBlogs) => {
  const authorValidation = await UserModel.findOne({ _id: payload.author });

  if (!authorValidation) {
    throw new AppError(httpStatus.NOT_FOUND, 'Author Id is not Found');
  }

  const result = BlogsModel.create(payload);
  return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

  const blogsQuery = new QueryBuilder(
    BlogsModel.find().populate('author'),
    query,
  )
    .search(blogsSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogsQuery.modelQuery;
  return result;

 
};

const updateBlogsIntoDB = async (id: string, payload: IBlogs) => {
  const result = await BlogsModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(httpStatus.FORBIDDEN, 'Blog not found');
  }
  return result;
};

const deleteBlogsIntoDB = async (id: string) => {
  const result = await BlogsModel.deleteOne({ _id: id });
  return result;
};

export const BlogsServices = {
  createBlogsIntoDB,
  getAllBlogsFromDB,
  updateBlogsIntoDB,
  deleteBlogsIntoDB,
};
