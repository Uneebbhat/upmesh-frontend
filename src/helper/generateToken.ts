import jwt from "jsonwebtoken";

import { JWT_SECRET } from "@/config/constants";
import { NextResponse } from "next/server";
import { IUserDTO } from "@/interfaces/User";

const generateToken = (payload: IUserDTO) => {
  if (!JWT_SECRET) {
    return NextResponse.json(
      { error: "JWT Secret is not defined." },
      { status: 400 }
    );
  }

  const token = jwt.sign(
    {
      userId: payload._id,
      username: payload.username,
      email: payload.email,
    },
    JWT_SECRET,
    { expiresIn: "30d" }
  );

  return token;
};

export default generateToken;
