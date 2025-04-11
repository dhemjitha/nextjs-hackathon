import mongoose, { Document, Schema } from "mongoose";

export interface ITasker extends Document {
  userId: string;
  fullName: string;
  phoneNumber: string;
  description?: string;
  role: string;
  createdAt: Date;
}

const taskerSchema: Schema = new mongoose.Schema<ITasker>({
  userId: { type: String, required: true },
  fullName: { type: String, required: true, trim: true },
  phoneNumber: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Tasker = mongoose.models.Tasker || mongoose.model<ITasker>("Tasker", taskerSchema);
export default Tasker;
