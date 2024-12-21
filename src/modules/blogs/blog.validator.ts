import { Types } from 'mongoose';
import { z } from 'zod';

const createBlogPostValidationSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  content: z.string().min(1, { message: 'Content is required' }),
  author: z.string(),
  isPublished: z.boolean().default(true), // Default to true (published)
  createdAt: z.date().default(() => new Date()), // Default to current date
  updatedAt: z.date().default(() => new Date()), // Default to current date
});

export const BlogPostValidation = {
  createBlogPostValidationSchema,
};
