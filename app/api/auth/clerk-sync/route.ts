import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import connectDB from "@/server/infrastructure/db";
import User from "@/server/infrastructure/schemas/User";

export async function POST(req: Request) {
  await connectDB();

  const { userId } = auth(); // Clerk Auth
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Check if user exists in MongoDB
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      // Get user data from Clerk
      const clerkRes = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      });

      const clerkUser = await clerkRes.json();

      user = await User.create({
        clerkId: userId,
        email: clerkUser.email_addresses[0].email_address,
        name: clerkUser.first_name + " " + clerkUser.last_name,
      });
      return NextResponse.json({ user });
    }else{
        // redirect to login
        return NextResponse.redirect(new URL('/login', req.url));
    }

  } catch (err) {
    return NextResponse.json({ error: "Failed to sync user" }, { status: 500 });
  }
}
