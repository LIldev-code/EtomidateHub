const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

async function sendTelegramMessage(text) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn("Telegram bot not configured — skipping notification. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.");
    return;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("Telegram notification failed:", res.status, body);
    }
  } catch (err) {
    console.error("Telegram notification error:", err.message);
  }
}

export async function sendContactTelegramNotification({ name, replyMethod, replyHandle, subject, message }) {
  const text = `📩 <b>New Contact Message</b>

<b>From:</b> ${name || "Anonymous"}
<b>Reply via:</b> ${replyMethod === "telegram" ? "Telegram" : "WhatsApp"}: ${replyHandle}
<b>Subject:</b> ${subject || "General Inquiry"}

<b>Message:</b>
${message}`;
  await sendTelegramMessage(text);
}

export async function sendOrderTelegramNotification(orderDoc) {
  const order = orderDoc?.toObject ? orderDoc.toObject() : orderDoc;
  const { orderId, productName, size, price, customerName, customerEmail, customerPhone, shippingAddress, message } = order;

  const text = `🛒 <b>New Order Received!</b>

<b>Order ID:</b> ${orderId}
<b>Product:</b> ${productName} — ${size}
<b>Price:</b> €${typeof price === "number" ? price.toFixed(2) : price}

<b>Customer:</b> ${customerName}
<b>Email:</b> ${customerEmail}
<b>Phone:</b> ${customerPhone}
<b>Shipping Address:</b> ${shippingAddress}
${message ? `\n<b>Customer Message:</b>\n${message}` : ""}`;
  await sendTelegramMessage(text);
}
