import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/db/index.mjs";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user)
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });

  const { email } = session.user;

  try {
    const me = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return new NextResponse(JSON.stringify(me), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error." }),
      {
        status: 500,
      },
    );
  }
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user)
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });

  const { email } = session.user;
  const { collegeName, collegeRollNumber, phoneNumber } = await req.json();

  if (!collegeName || !collegeRollNumber || !phoneNumber)
    return new NextResponse(
      JSON.stringify({ message: "All fields are required." }),
      {
        status: 400,
      },
    );

  try {
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { collegeName, collegeRollNumber, phoneNumber },
    });

    console.log(updatedUser);

    return new NextResponse(
      JSON.stringify({
        message: "Profile updated successfully.",
        user: updatedUser,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error." }),
      {
        status: 500,
      },
    );
  }
}
