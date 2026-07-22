"use client";
import { useState } from "react";
import { FiMessageCircle, FiMail, FiX } from "react-icons/fi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const links = [
  {
    label: "Telegram",
    href: "https://t.me/chemsolution12mal",
    icon: <FaTelegramPlane className="w-5 h-5" />,
    bg: "bg-[#0088cc]",
    hover: "hover:bg-[#0077b5]",
  },
  {
    label: "Email",
    href: "mailto:orders@etomidatesite.com",
    icon: <FiMail className="w-5 h-5" />,
    bg: "bg-[#f59e0b]",
    hover: "hover:bg-[#ea7a17]",
  },
];

export default function SocialFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start gap-3">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? "bg-[#262626] text-white rotate-0"
            : "bg-[#f59e0b] text-black hover:bg-[#ea7a17] hover:shadow-xl hover:shadow-[#f59e0b]/25"
        }`}
      >
        {open ? <FiX className="w-6 h-6" /> : <FiMessageCircle className="w-6 h-6" />}
      </button>

      {/* Social links */}
      {open && (
        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 ${link.bg} ${link.hover} text-white w-14 hover:w-auto rounded-full shadow-lg transition-all duration-300 overflow-hidden`}
              style={{ animationDelay: `${i * 80}ms` }}
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
      )}
    </div>
  );
}

