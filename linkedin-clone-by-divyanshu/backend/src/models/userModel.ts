import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  uid: string;
  name?: string;
  email: string;
  photoURL?: string;
  headline?: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
  uid: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true },
  photoURL: { type: String },
  headline: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
