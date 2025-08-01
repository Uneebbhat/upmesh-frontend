import { Document, Types } from "mongoose";

export enum Role {
  developer = "Developer",
  designer = "Designer",
  marketer = "Marketer",
  contentCreator = "Content Creator",
  freelancer = "Freelancer",
  startupOwner = "Startup Owner",
  mentor = "Mentor",
  other = "Other",
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  role: string;
  [key: string]: unknown;
}

export interface IUserDTO {
  _id: Types.ObjectId;
  username: string;
  email: string;
  profilePic: string;
  role: string;
  createdAt: string;
}

export interface SignupFormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: File | string | null;
  role: string;
  [key: string]: unknown;
}

export interface LoginFormDataProps {
  email: string;
  password: string;
}

export interface ForgotPasswordFormProps {
  email: string;
}

export interface ResetPasswordFormProps {
  newPassword: string;
}
