import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        required: true,
    },
    taskerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tasker",
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending",
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)

export default Booking

