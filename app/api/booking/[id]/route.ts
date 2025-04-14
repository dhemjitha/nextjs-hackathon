import connectDB from "@/server/infrastructure/db";
import User from "@/server/infrastructure/schemas/User";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

// GET user by ID
export async function GET(req: Request, { params }: Params) {
  await connectDB();

  try {
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }
}

// UPDATE user by ID
export async function PUT(req: Request, { params }: Params) {
  await connectDB();

  try {
    const body = await req.json();
    const updatedUser = await User.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 400 });
  }
}

// DELETE user by ID
export async function DELETE(req: Request, { params }: Params) {
  await connectDB();

  try {
    const deletedUser = await User.findByIdAndDelete(params.id);

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 400 });
  }
}

