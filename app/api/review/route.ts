import connectDB from "@/server/infrastructure/db";
import Review from "@/server/infrastructure/schemas/Review";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        const reviews = await Review.find({}).populate("taskerId").populate("taskId");

        return NextResponse.json(reviews, { status: 200 });
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    await connectDB();

    try {
        const body = await req.json();
        const { description, rating, taskerId, taskId, userId } = body;

        const newReview = new Review({
            description,
            rating,
            taskerId,
            taskId,
            userId,
        });

        await newReview.save();
        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error("Error creating review:", error);
        return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
    }
}