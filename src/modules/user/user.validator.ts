import { z } from 'zod';

export const CreateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    role: z.enum(['admin', 'user']).default('user'),
    isBlocked: z.boolean().default(false),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const UserValidation = {
  CreateUserValidationSchema,
  loginValidationSchema,
};
