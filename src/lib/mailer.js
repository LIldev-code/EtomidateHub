import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: (process.env.GMAIL_APP_PASSWORD || "").replace(/\s/g, ""),
  },
});

export async function sendContactNotification({ name, replyMethod, replyHandle, subject, message }) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #333; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: #00246B; padding: 20px 30px;">
        <h1 style="margin: 0; color: #fff; font-size: 20px;">📩 New Contact Message</h1>
      </div>
      <div style="padding: 30px;">
        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">From</p>
        <p style="color: #333; margin-top: 0;">${name || "Anonymous"}</p>

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Reply via</p>
        <p style="color: #333; margin-top: 0;">${replyMethod === "telegram" ? "Telegram" : "WhatsApp"}: ${replyHandle}</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Subject</p>
        <p style="color: #333; margin-top: 0;">${subject || "General Inquiry"}</p>

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Message</p>
        <p style="color: #333; margin-top: 0; white-space: pre-wrap;">${message}</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
        <p style="color: #999; font-size: 12px; text-align: center;">Reply to this customer via their ${replyMethod === "telegram" ? "Telegram" : "WhatsApp"} handle above.</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Etomidatehub" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `Contact: ${subject || "General Inquiry"} — from ${name || "Anonymous"}`,
      html,
    });
    console.log(`Contact notification sent for ${name}`);
  } catch (err) {
    console.error("Failed to send contact email:", err.message);
  }
}

export async function sendOrderNotification(orderDoc) {
  const order = orderDoc?.toObject ? orderDoc.toObject() : orderDoc;
  const { orderId, productName, size, price, customerName, customerEmail, shippingAddress, message } = order;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #333; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      <div style="background: #00246B; padding: 20px 30px;">
        <h1 style="margin: 0; color: #fff; font-size: 20px;">🛒 New Order Received!</h1>
      </div>
      <div style="padding: 30px;">
        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Order ID</p>
        <p style="color: #333; margin-top: 0;">${orderId}</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Product</p>
        <p style="color: #333; margin-top: 0;">${productName} — ${size}</p>

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Price</p>
        <p style="color: #00246B; margin-top: 0; font-size: 22px; font-weight: bold;">€${typeof price === 'number' ? price.toFixed(2) : price}</p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Customer</p>
        <p style="color: #333; margin-top: 0;">${customerName}</p>

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Email</p>
        <p style="color: #333; margin-top: 0;">${customerEmail}</p>

        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Shipping Address</p>
        <p style="color: #333; margin-top: 0;">${shippingAddress}</p>

        ${message ? `
        <p style="color: #001a4d; font-size: 14px; font-weight: bold; margin-bottom: 5px;">Customer Message</p>
        <p style="color: #333; margin-top: 0; white-space: pre-wrap;">${message}</p>
        ` : ''}

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
        <p style="color: #999; font-size: 12px; text-align: center;">This is an automated notification from Etomidatehub</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Etomidatehub" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Order ${orderId} — ${productName} (€${typeof price === 'number' ? price.toFixed(2) : price})`,
      html,
    });
    console.log(`Order notification sent for ${orderId}`);
  } catch (err) {
    console.error("Failed to send order email:", err.message);
  }
}
