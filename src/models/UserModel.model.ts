import { Role } from "@/interfaces/User";
import { IUser } from "@/interfaces/User";
import mongoose, { Schema } from "mongoose";

const UserModel: Schema<IUser> = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Usernme is required"],
      unique: [true, "Username must be unique"],
      minlength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [8, "Password must be at least 8 charactes ling"],
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.developer,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", UserModel);

export default User;
