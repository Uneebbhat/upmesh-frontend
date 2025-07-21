import { Types } from "mongoose";
import { IUserDTO } from "@/interfaces/User";

class UserDTO {
  _id: Types.ObjectId;
  profilePic: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;

  constructor(user: IUserDTO) {
    this._id = user._id;
    this.profilePic = user.profilePic;
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
    this.createdAt = user.createdAt;
  }
}

export default UserDTO;
