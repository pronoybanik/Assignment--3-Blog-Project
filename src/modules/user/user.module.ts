import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';

// Mongoose Schema
const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  isBlocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Mongoose Model
const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
