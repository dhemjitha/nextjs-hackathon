import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    taskerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tasker",
        required: true,
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema)

export default Review
