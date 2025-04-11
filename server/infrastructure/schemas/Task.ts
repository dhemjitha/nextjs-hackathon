import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  taskerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tasker",
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema)

export default Task
