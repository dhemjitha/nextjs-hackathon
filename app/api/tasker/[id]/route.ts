import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/server/infrastructure/db"
import Tasker from "@/server/infrastructure/schemas/Tasker"

interface Params {
  params: { id: string };
}

// GET tasker by ID
export async function GET(req: Request, { params }: Params) {
  await connectDB();

  try {
    const tasker = await Tasker.findById(params.id);
    if (!tasker) {
      return NextResponse.json({ error: "Tasker not found" }, { status: 404 });
    }

    return NextResponse.json(tasker);
  } catch (error) {
    return NextResponse.json({ error: "Invalid tasker ID" }, { status: 400 });
  }
}

// UPDATE tasker by ID
export async function PUT(req: Request, { params }: Params) {
  await connectDB();

  try {
    const body = await req.json();
    const updatedTasker = await Tasker.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTasker) {
      return NextResponse.json({ error: "Tasker not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTasker);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update tasker" }, { status: 400 });
  }
}

// DELETE tasker by ID
export async function DELETE(req: Request, { params }: Params) {
  await connectDB();

  try {
    const deletedTasker = await Tasker.findByIdAndDelete(params.id);

    if (!deletedTasker) {
      return NextResponse.json({ error: "Tasker not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Tasker deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete tasker" }, { status: 400 });
  }
}

