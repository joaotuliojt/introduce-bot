import mongoose, { Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
  id: number;
  frontendStacks?: string[];
  backendStacks?: string[];
  linkedin?: string;
  github?: string;
  resume: string;
  name: string;
}

const UserSchema = new Schema<IUser>(
  {
    id: {
      unique: true,
      type: Number,
      required: true,
    },
    frontendStacks: {
      type: [String],
    },
    backendStacks: {
      type: [String],
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    resume: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUser> = mongoose.model("users", UserSchema);
