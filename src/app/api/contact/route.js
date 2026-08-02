import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Message from "@/models/Message";
import { sendContactNotification } from "@/lib/mailer";
import { sendContactTelegramNotification } from "@/lib/telegram";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, replyMethod, replyHandle, subject, message } = body;

    if (!message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const method = ["telegram", "whatsapp"].includes(replyMethod) ? replyMethod : "none";
    if (method !== "none" && !replyHandle) {
      return NextResponse.json({ error: "Missing reply contact" }, { status: 400 });
    }

    await Message.create({
      name: name || "Anonymous",
      replyMethod: method,
      replyHandle: replyHandle || "",
      subject: subject || "General Inquiry",
      message,
    });

    // Fire-and-forget notifications — don't block the response if they fail
    sendContactNotification({ name, replyMethod: method, replyHandle, subject, message });
    sendContactTelegramNotification({ name, replyMethod: method, replyHandle, subject, message });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// GET — admin can retrieve messages
export async function GET() {
  await dbConnect();
  const messages = await Message.find({}).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ messages });
}
