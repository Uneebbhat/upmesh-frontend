import { MONGODB_URI } from "@/config/constants";
import mongoose from "mongoose";

const db = async () => {
  try {
    if (!MONGODB_URI) {
      console.log(
        "❌ MongoDB URI is not defined in the environment variables."
      );
      process.exit(1);
    }

    const conn = await mongoose.connect(MONGODB_URI!);
    if (!conn) {
      console.log(`An error occured while connecting to MongoDB`);
    }
    console.log(`Database connected successfully: ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unknown error occured");
    }
  }
};

export default db;
