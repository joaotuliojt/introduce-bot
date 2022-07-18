import mongoose, { Schema, Model, Document } from "mongoose";

interface Link {
  origin: string;
  url: string;
}
export interface IUser extends Document {
  id: number;
  frontendStacks?: string[];
  backendStacks?: string[];
  linkedin?: string;
  github?: string;
  resume: string;
  name: string;
  title: string;
  links: Link[];
}

const UserSchema = new Schema<IUser>(
  {
    id: {
      unique: true,
      type: Number,
      required: true,
    },
    links: [
      {
        origin: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
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
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUser> = mongoose.model("users", UserSchema);
