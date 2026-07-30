"use client";

import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const ADMIN_TELEGRAM = process.env.NEXT_PUBLIC_ADMIN_TELEGRAM || "";
const ADMIN_WHATSAPP = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || "";

const telegramUrl = ADMIN_TELEGRAM
  ? `https://t.me/${ADMIN_TELEGRAM.replace(/^@/, "")}`
  : "";

const whatsappUrl = ADMIN_WHATSAPP
  ? `https://wa.me/${ADMIN_WHATSAPP}`
  : "";

const links = [
  ADMIN_TELEGRAM && {
    label: "Telegram",
    href: telegramUrl,
    icon: <FaTelegramPlane className="w-6 h-6" />,
    bg: "bg-[#0088cc]",
    hover: "hover:bg-[#0077b5]",
  },
  ADMIN_WHATSAPP && {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: <FaWhatsapp className="w-6 h-6" />,
    bg: "bg-[#25D366]",
    hover: "hover:bg-[#1ebd5a]",
  },
].filter(Boolean);

export default function SocialFloat() {
  if (links.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`group flex items-center gap-0 ${link.bg} ${link.hover} text-white w-14 hover:w-auto h-14 rounded-full shadow-xl transition-all duration-300 overflow-hidden`}
        >
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            {link.icon}
          </div>
          <span className="pr-5 text-sm font-semibold whitespace-nowrap hidden group-hover:inline-block">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
