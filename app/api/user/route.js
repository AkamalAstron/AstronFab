
import db from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";



export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();

    const displayName = `${firstName} ${lastName}`;

    // Check if user email already Exists
    const userExist = await db.user.findUnique({
      where: { email },
    });
    if (userExist) {
      return NextResponse.json(
        {
          message: "User Already exists",
          user: null,
        },
        { status: 409 }
      );
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        displayName,
        email,
        hashedPassword,
      },
    });
    console.log(newUser);
    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
