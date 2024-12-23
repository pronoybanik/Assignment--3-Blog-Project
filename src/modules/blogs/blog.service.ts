import AppError from '../../middlewares/AppError';
import UserModel from '../user/user.module';
import { IBlogs } from './blog.interface';
import { BlogsModel } from './blog.module';
import httpStatus from 'http-status';

const createBlogsIntoDB = async (payload: IBlogs) => {
  const authorValidation = await UserModel.findOne({ _id: payload.author });

  if (!authorValidation) {
    throw new AppError(httpStatus.NOT_FOUND, 'Author Id is not Found');
  }

  const result = BlogsModel.create(payload);
  return result;
};

// const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

//   const queryObj = { ...query }

//   const blogsSearchableFields = ["title", "author._id"]

//   let searchTerm = ""

//   // searching
//   if (query?.searchTerm) {
//     searchTerm = query?.searchTerm as string;
//   }

//   const searchQuery = BlogsModel.find({
//     $or: blogsSearchableFields.map((field) => ({
//       [field]: { $regex: searchTerm, $options: "i" }
//     }))
//   })

//   // // filtering

//   const excludeFields = ["searchTerm", "sort"]

//   excludeFields.forEach((el) => delete queryObj[el]);
//   console.log({ query, queryObj });

//   const filterQuery = searchQuery.find(queryObj).populate('author');

//   let sort = "createdAt"

//   if (query.sort) {
//     sort = query.sort as string;
//   }

//   const sortQuery = await filterQuery.sort(sort)

//   return sortQuery;

// };

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  const blogsSearchableFields = ['title', 'author._id'];

  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = BlogsModel.find({
    $or: blogsSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = ['searchTerm', 'sort', 'sortOrder', 'filter'];
  excludeFields.forEach((el) => delete queryObj[el]);

  if (query?.filter) {
    queryObj['author._id'] = query.filter;
  }

  console.log({ query, queryObj });

  const filterQuery = searchQuery.find(queryObj).populate('author');

  const sortField = query?.sort ? (query.sort as string) : 'createdAt';
  const sortOrder = query?.sortOrder === 'asc' ? 1 : -1;
  const sortOptions: { [key: string]: 1 | -1 } = { [sortField]: sortOrder };

  const sortedBlogs = await filterQuery.sort(sortOptions);

  return sortedBlogs;
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
