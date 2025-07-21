import db from "@/lib/db";
import UserDTO from "@/dto/UserDTO.dto";
import User from "@/models/UserModel.model";
import generateToken from "@/helper/generateToken";
import { encryptPassword } from "@/helper/passwordHashingCompare";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { IUserDTO } from "@/interfaces/User";

type Body = {
  username: string;
  email: string;
  password: string;
  role: string;
};

export async function POST(req: Request) {
  try {
    // Database calling
    await db();

    const { username, email, password, role }: Body = await req.json();

    // University email validation
    if (!email.includes(".edu")) {
      return NextResponse.json(
        { error: "Please use your university email" },
        { status: 400 }
      );
    }

    // Checking existing user
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser?.username === username) {
      return NextResponse.json(
        {
          error: "This username already in use",
        },
        { status: 409 }
      );
    } else if (existingUser?.email === email) {
      return NextResponse.json(
        {
          error: "Email already exists",
        },
        { status: 409 }
      );
    }

    // Hashing password
    const hashedPassword = await encryptPassword(password, 10);

    // Creating new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!newUser) {
      return NextResponse.json(
        {
          error: "An error occured while creating account",
        },
        { status: 400 }
      );
    }

    // Send welcome email asynchronously
    (async () => {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Upmesh <onboarding@resend.dev>",
          to: [email],
          subject: "Welcome to Upmesh!",
          react: EmailTemplate({ firstName: username }),
        });
      } catch (e) {
        // Optionally log error, but do not block signup
        console.error("Failed to send welcome email:", e);
      }
    })();

    const token = generateToken(newUser.toObject() as unknown as IUserDTO);

    const cookieStore = await cookies();
    cookieStore.set("token", token as string, {
      httpOnly: true,
    });

    // Filtering response using userDTO
    const userDTO = new UserDTO(newUser.toObject() as unknown as IUserDTO);

    return NextResponse.json(
      {
        message: "Account created successfully",
        data: userDTO,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
