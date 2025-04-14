import connectDB from "@/server/infrastructure/db";
import Booking from "@/server/infrastructure/schemas/Booking";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        const bookings = await Booking.find({}).populate("taskId taskerId");

        return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    await connectDB();

    try {
        const body = await req.json();
        const { taskId, taskerId, userId, status, price } = body;

        const newBooking = new Booking({
            taskId,
            taskerId,
            userId,
            status,
            price,
        });

        await newBooking.save();
        return NextResponse.json(newBooking, { status: 201 });
    } catch (error) {
        console.error("Error creating booking:", error);
        return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
    }
}