import mongoose from "mongoose";
import { config } from "../config";

export const mongoConnection = async () => {
  await mongoose.connect(config.MONGO_URI);

  mongoose.connection.on("error", () => {
    console.log("Mongoose could not connect to MongoDB server");
  });
  mongoose.connection.once("open", () => {
    console.log("Mongoose connection open!");
  });
};
