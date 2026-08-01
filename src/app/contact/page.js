"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import { FiMail, FiPhone, FiClock, FiUser, FiSend, FiMessageSquare, FiLoader, FiCheckCircle, FiArrowRight, FiHeadphones } from "react-icons/fi";
import { BsShieldCheck, BsLightningCharge } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const ADMIN_WHATSAPP = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || "";
const ADMIN_TELEGRAM = process.env.NEXT_PUBLIC_ADMIN_TELEGRAM || "";

export default function ContactPage() {
  const [form, setForm] = useState({ 
    name: "", 
    replyMethod: "telegram",
    replyHandle: "",
    subject: "", 
    message: ""
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [siteSettings, setSiteSettings] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => setSiteSettings(data.settings || {}))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      toast.error("Spam detected.");
      return;
    }
    if (!confirmed) {
      toast.error("Please confirm you are a genuine buyer.");
      return;
    }
    if (!form.replyHandle.trim()) {
      toast.error(`Please enter your ${form.replyMethod === "telegram" ? "Telegram username" : "WhatsApp number"} so we can reply.`);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, confirmed: true }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ 
          name: "", 
          replyMethod: "telegram",
          replyHandle: "",
          subject: "", 
          message: ""
        });
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with background image */}
      <div className="relative bg-[#00246B] py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/uploads/hub.jpeg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#00246B]/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-[#CADCFC]/90 text-lg max-w-xl mx-auto">
              Have a question or ready to order? Reach out and we&apos;ll respond within 2 hours.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Contact Buttons */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADMIN_TELEGRAM && (
            <a
              href={`https://t.me/${ADMIN_TELEGRAM.replace(/^@/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-lg shadow-[#00246B]/5 border border-[#CADCFC]/30 hover:border-[#00246B]/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
                <FaTelegramPlane className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Telegram</p>
                <p className="text-xs text-gray-500">{ADMIN_TELEGRAM.startsWith("@") ? ADMIN_TELEGRAM : `@${ADMIN_TELEGRAM}`}</p>
              </div>
            </a>
          )}
          {ADMIN_WHATSAPP && (
            <a
              href={`https://wa.me/${ADMIN_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-lg shadow-[#00246B]/5 border border-[#CADCFC]/30 hover:border-[#00246B]/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <FaWhatsapp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">WhatsApp</p>
                <p className="text-xs text-gray-500">Chat with us</p>
              </div>
            </a>
          )}
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#f8faff] border border-[#CADCFC]/30 rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 bg-[#00246B] rounded-full flex items-center justify-center mx-auto mb-5">
                    <FiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    We&apos;ll get back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="inline-flex items-center gap-2 bg-[#00246B] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#001a4d] transition-all"
                  >
                    Send Another <FiArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h2>
                    <p className="text-sm text-gray-500">We&apos;ll reply via your preferred platform.</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Name <span className="text-gray-400">(optional)</span></label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/20 focus:border-[#00246B] transition-all"
                    />
                  </div>

                  {/* Reply method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Reply via *</label>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, replyMethod: "telegram", replyHandle: "" })}
                        className={`flex items-center gap-2.5 rounded-lg border p-3 text-left text-sm transition-all ${
                          form.replyMethod === "telegram" ? "border-sky-500 bg-sky-50 font-semibold" : "border-gray-200 hover:border-sky-300"
                        }`}
                      >
                        <FaTelegramPlane className="w-5 h-5 text-sky-500" />
                        Telegram
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, replyMethod: "whatsapp", replyHandle: "" })}
                        className={`flex items-center gap-2.5 rounded-lg border p-3 text-left text-sm transition-all ${
                          form.replyMethod === "whatsapp" ? "border-green-500 bg-green-50 font-semibold" : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <FaWhatsapp className="w-5 h-5 text-green-500" />
                        WhatsApp
                      </button>
                    </div>
                    <input
                      type={form.replyMethod === "whatsapp" ? "tel" : "text"}
                      placeholder={form.replyMethod === "telegram" ? "@your_username" : "+1 234 567 8900"}
                      required
                      value={form.replyHandle}
                      onChange={(e) => setForm({ ...form, replyHandle: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/20 focus:border-[#00246B] transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      placeholder="What can we help with?"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/20 focus:border-[#00246B] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/20 focus:border-[#00246B] transition-all resize-none"
                    />
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Confirmation */}
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-[#f8faff] border border-[#CADCFC]/30 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-[#00246B]"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I confirm I am a genuine buyer/researcher. This inquiry will be reviewed before reply.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting || !confirmed}
                    className="w-full flex items-center justify-center gap-2 bg-[#00246B] hover:bg-[#001a4d] disabled:opacity-50 text-white font-bold py-3.5 rounded-lg transition-all text-sm"
                  >
                    {submitting ? (
                      <FiLoader className="w-4 h-4 animate-spin" />
                    ) : (
                      <FiSend className="w-4 h-4" />
                    )}
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Response time */}
            <div className="bg-[#00246B] rounded-2xl p-6 text-center">
              <FiClock className="w-8 h-8 text-[#CADCFC] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">&lt; 2 Hours</div>
              <p className="text-xs text-[#CADCFC]/70">Average response time</p>
            </div>

            {/* FAQ */}
            <div className="bg-[#f8faff] rounded-2xl p-6 border border-[#CADCFC]/20">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Frequently Asked</h3>
              <div className="space-y-3">
                {[
                  { q: "Shipping time?", a: "3–7 business days. Orders dispatched within 48h." },
                  { q: "Bulk pricing?", a: "Yes — message us for custom quotes on large orders." },
                  { q: "Discreet packaging?", a: "All orders ship in plain, unmarked packages." },
                  { q: "Payment methods?", a: "Bank transfer, crypto, and more. Details on confirmation." },
                ].map((item, i) => (
                  <div key={i} className="pb-3 border-b border-[#CADCFC]/20 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold text-[#00246B] mb-0.5">{item.q}</p>
                    <p className="text-xs text-gray-500">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <BsShieldCheck className="w-3.5 h-3.5" />, text: "Secure" },
                { icon: <BsLightningCharge className="w-3.5 h-3.5" />, text: "Fast Reply" },
                { icon: <FiHeadphones className="w-3.5 h-3.5" />, text: "24/7" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 bg-white border border-[#CADCFC]/30 rounded-full px-3 py-1.5">
                  <span className="text-[#00246B]">{b.icon}</span>
                  <span className="text-xs font-medium text-gray-600">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
