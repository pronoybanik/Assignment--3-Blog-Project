import { z } from 'zod';
import { Types } from 'mongoose';

const CreateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    content: z.string().min(1, { message: 'Content is required' }),
    author: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid author ID',
    }),
    isPublished: z.boolean().default(true),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  }),
});

export const BlogsValidation = {
  CreateBlogValidationSchema,
};
