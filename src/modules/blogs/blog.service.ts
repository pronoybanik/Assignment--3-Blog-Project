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

const updateBlogsIntoDB = async (
  id: string,
  payload: IBlogs,
) => {
  const result = await BlogsModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};


const deleteBlogsIntoDB = async (id: string) => {
  const result = await BlogsModel.deleteOne({ _id: id })
  return result;
}

export const BlogsServices = {
  createBlogsIntoDB,
  getAllBlogsFromDB,
  updateBlogsIntoDB,
  deleteBlogsIntoDB
};
