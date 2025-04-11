import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/server/infrastructure/db"
import Tasker from "@/server/infrastructure/schemas/Tasker"

export async function GET() {
    try {
        await connectDB()

        const taskers = await Tasker.find({})

        return NextResponse.json(taskers, { status: 200 });
    } catch (error) {
        console.error("Error fetching taskers:", error)
        return NextResponse.json({ error: "Failed to fetch taskers" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    await connectDB();

    try {
        const body = await req.json();
        const { userId, fullName, phoneNumber, description, role } = body;

        const newTasker = new Tasker({
            userId,
            fullName,
            phoneNumber,
            description,
            role,
        });

        await newTasker.save();
        return NextResponse.json(newTasker, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create tasker" }, { status: 500 });
    }
}