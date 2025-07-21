import db from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/UserModel.model";

import { NextResponse } from "next/server";
import { decryptPassword } from "@/helper/passwordHashingCompare";
import UserDTO from "@/dto/UserDTO.dto";
import { IUserDTO } from "@/interfaces/User";
import generateToken from "@/helper/generateToken";
import { cookies } from "next/headers";

type Body = {
  email: string;
  password: string;
};

export async function POST(req: Request) {
  try {
    // Database calling
    await db();

    const { email, password }: Body = await req.json();

    // University email validation
    if (!email.includes(".edu")) {
      return NextResponse.json(
        { error: "Please use your university email" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Password comparing
    const comparePassword = await decryptPassword(
      password,
      existingUser.password
    );

    if (!comparePassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 409 }
      );
    }

    const token = generateToken(existingUser.toObject() as unknown as IUserDTO);

    const cookieStore = await cookies();
    cookieStore.set("token", token as string, {
      httpOnly: true,
    });

    const userDTO = new UserDTO(existingUser.toObject() as unknown as IUserDTO);

    return NextResponse.json(
      {
        message: "Login successfully",
        data: userDTO,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
