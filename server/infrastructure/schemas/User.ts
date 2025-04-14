import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  fullName: string;
  phoneNumber: string;
  description?: string;
  role: "user" | "tasker" | "admin";
  createdAt: Date;
}

const userSchema: Schema = new mongoose.Schema<IUser>({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phoneNumber: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  role: { type: String, required: true , default: "user"},
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.Tasker || mongoose.model<IUser>("User", userSchema);
export default User
