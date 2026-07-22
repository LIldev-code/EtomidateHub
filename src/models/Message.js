import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: { type: String, default: "Anonymous" },
    replyMethod: { type: String, enum: ["telegram", "whatsapp", "none"], default: "none" },
    replyHandle: { type: String, default: "" },
    subject: { type: String, default: "General Inquiry" },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
