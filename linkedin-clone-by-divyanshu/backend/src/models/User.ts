import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firebaseUid: string;
  name: string;
  email: string;
  imageUrl?: string;
}

const userSchema = new Schema<IUser>(
  {
    firebaseUid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError on hot reload
const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
