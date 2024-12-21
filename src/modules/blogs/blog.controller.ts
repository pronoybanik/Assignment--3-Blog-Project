import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogsServices } from './blog.service';
import httpStatus from 'http-status';

const createBlogs = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await BlogsServices.createBlogsIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res, next) => {
  const result = await BlogsServices.getAllBlogsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user are retrieved successfully',
    data: result,
  });
});

export const blogsControllers = {
  createBlogs,
  getAllBlogs,
};
