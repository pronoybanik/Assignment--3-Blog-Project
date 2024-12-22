import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import UserModel from "../user/user.module";
import httpStatus from 'http-status';
import { adminServices } from "./admin.service";

const adminBlockUser = catchAsync(async (req, res, next) => {
    const { userId } = req.params;

    const result = await adminServices.updateBlogIntoDB(userId);

    sendResponse(res, {
        success: true,
        message: 'User blocked successfully',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const adminDeleteBlogs = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await adminServices.deleteBlogsIntoDB(id);
  
    sendResponse(res, {
      success: true,
      message: 'Blog deleted successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

export const adminControllers = {
    adminBlockUser,
    adminDeleteBlogs
};