import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
import httpStatus from 'http-status';

const createCourse = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await UserService.createUserIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create successfully',
    data: result,
  });
});

const getAllCourse = catchAsync(async (req, res, next) => {
  const result = await UserService.getAllUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user are retrieved successfully',
    data: result,
  });
});

export const UserController = {
  createCourse,
  getAllCourse,
};
