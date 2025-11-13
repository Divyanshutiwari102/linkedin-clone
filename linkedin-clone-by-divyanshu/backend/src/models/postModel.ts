import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  authorUid: string;
  content: string;
  image?: string;
  likes: string[];
  comments: { uid: string; text: string; createdAt: Date }[];
  createdAt: Date;
}

const PostSchema: Schema = new Schema<IPost>({
  authorUid: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  likes: { type: [String], default: [] },
  comments: {
    type: [
      {
        uid: { type: String },
        text: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },
  createdAt: { type: Date, default: Date.now },
});

export const PostModel = mongoose.model<IPost>("Post", PostSchema);
