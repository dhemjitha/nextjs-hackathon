import connectDB from "@/server/infrastructure/db"
import User from "@/server/infrastructure/schemas/User"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()

        const users = await User.find({})

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error)
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    await connectDB();

    try {
        const body = await req.json();
        const { userId, fullName, phoneNumber, description, role } = body;

        const newUser = new User({
            userId,
            fullName,
            phoneNumber,
            description,
            role,
        });

        await newUser.save();
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}