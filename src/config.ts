import dotenv from "dotenv";

dotenv.config();

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  MONGO_URI: process.env.MONGO_URI || "",
};
