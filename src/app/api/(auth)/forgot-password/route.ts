import db from "@/lib/db";
import { NextResponse } from "next/server";

type Body = {
  email: string;
};

export async function POST(req: Request) {
  try {
    //Database calling
    await db();

    const { email }: Body = await req.json();

    // University email validation
    if (!email.includes(".edu")) {
      return NextResponse.json(
        { error: "Please use your university email" },
        { status: 400 }
      );
    }
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
