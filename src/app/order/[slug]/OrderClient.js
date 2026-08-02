"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaFlask, FaVial, FaTint, FaAppleAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import {
  FiCheckCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiShoppingBag,
  FiChevronRight,
  FiLoader,
  FiArrowLeft,
  FiPackage,
  FiShield,
  FiTruck,
  FiAlertCircle,
} from "react-icons/fi";

const ADMIN_WHATSAPP = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || "";
const ADMIN_TELEGRAM = process.env.NEXT_PUBLIC_ADMIN_TELEGRAM || "";

const categoryIcons = {
  powder: <FaFlask className="w-10 h-10 text-[#00246B]" />,
  vape: <FaVial className="w-10 h-10 text-[#00246B]" />,
  liquid: <FaTint className="w-10 h-10 text-[#00246B]" />,
  flavours: <FaAppleAlt className="w-10 h-10 text-[#00246B]" />,
};

function buildWhatsAppText({ product, sizeLabel, price, form }) {
  const lines = [
    "*New Order from Etomidatehub.com*",
    "",
    `*Product:* ${product.name}`,
    `*Category:* ${product.category}`,
    `*Size:* ${sizeLabel}`,
    `*Price:* €${Number(price).toFixed(2)}`,
    "",
    `*Name:* ${form.name}`,
    `*Email:* ${form.email}`,
    `*Phone:* ${form.phone}`,
    `*Shipping Address:* ${form.address}`,
  ];
  if (form.message?.trim()) {
    lines.push("", `*Message:* ${form.message.trim()}`);
  }
  return encodeURIComponent(lines.join("\n"));
}

function buildTelegramText({ product, sizeLabel, price, form }) {
  if (!product) return "";
  const lines = [
    "New Order from Etomidatehub.com",
    "",
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    `Size: ${sizeLabel}`,
    `Price: €${Number(price).toFixed(2)}`,
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Shipping Address: ${form.address}`,
  ];
  if (form.message?.trim()) {
    lines.push("", `Message: ${form.message.trim()}`);
  }
  return encodeURIComponent(lines.join("\n"));
}

export default function OrderClient() {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [orderChannel, setOrderChannel] = useState("whatsapp");
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [confirmed, setConfirmed] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        const found = data.products?.find((p) => p.slug === slug);
        setProduct(found || null);
        const sizeParam = searchParams.get("size");
        if (sizeParam && found?.sizes?.length) {
          const idx = found.sizes.findIndex((s) => s.label === sizeParam);
          if (idx >= 0) setSelectedSize(idx);
        }
      })
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [slug, searchParams]);

  const sizeLabel = product?.sizes?.[selectedSize]?.label || "Standard";
  const currentPrice = product?.sizes?.[selectedSize]?.price || product?.price || 0;

  const whatsappUrl = useMemo(() => {
    if (!ADMIN_WHATSAPP || !product) return "";
    const text = buildWhatsAppText({ product, sizeLabel, price: currentPrice, form });
    return `https://wa.me/${ADMIN_WHATSAPP}?text=${text}`;
  }, [product, sizeLabel, currentPrice, form]);

  const telegramUrl = useMemo(() => {
    if (!ADMIN_TELEGRAM || !product) return "";
    const text = buildTelegramText({ product, sizeLabel, price: currentPrice, form });
    const username = ADMIN_TELEGRAM.replace(/^@/, "");
    return `https://t.me/${username}?text=${text}`;
  }, [product, sizeLabel, currentPrice, form]);
  const selectedChannelUrl = orderChannel === "telegram" ? telegramUrl : whatsappUrl;
  const selectedChannelLabel = orderChannel === "telegram" ? "Telegram" : "WhatsApp";
  const hasSelectedChannel = orderChannel === "telegram" ? Boolean(ADMIN_TELEGRAM) : Boolean(ADMIN_WHATSAPP);

  const handleOrder = async (e) => {
    e.preventDefault();
    if (honeypot) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    if (!confirmed) {
      toast.error("Please confirm you are ready to place a real order.");
      return;
    }
    if (!hasSelectedChannel) {
      toast.error(`${selectedChannelLabel} is not configured. Please contact support.`);
      return;
    }
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.address.trim()) {
      toast.error("Please fill in all required details.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.slug,
          productName: product.name,
          size: sizeLabel,
          price: currentPrice,
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
          shippingAddress: form.address,
          message: form.message,
          orderChannel,
        }),
      });
      if (res.ok) {
        setOrderPlaced(true);
        toast.success(`Order request saved. Opening ${selectedChannelLabel}...`);
        window.open(selectedChannelUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.error("Failed to save order. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex items-center justify-center px-4">
        <div className="text-center">
          <FiLoader className="w-10 h-10 text-[#00246B] animate-spin mx-auto mb-3" />
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Product Not Found</h1>
          <Link href="/shop" className="text-[#00246B] hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center"
        >
          <div className="bg-white border border-[#CADCFC]/30 rounded-3xl p-10">
            <div className="w-20 h-20 bg-[#CADCFC]/20 rounded-full flex items-center justify-center mx-auto mb-5">
              {orderChannel === "telegram" ? <FaTelegramPlane className="w-10 h-10 text-sky-500" /> : <FaWhatsapp className="w-10 h-10 text-[#00246B]" />}
            </div>
            <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Order Sent to {selectedChannelLabel}</h1>
            <p className="text-gray-600 mb-2">
              Thank you, <span className="font-semibold text-gray-900">{form.name}</span>.
            </p>
            <p className="text-gray-600 mb-6">
              Your order for{" "}
              <span className="font-semibold text-gray-900">
                {product.name} — {sizeLabel}
              </span>{" "}
              has been saved. If {selectedChannelLabel} did not open, use the button below to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={selectedChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00246B] hover:bg-[#001a4d] text-white font-bold px-8 py-3 rounded-xl transition-all"
              >
                {orderChannel === "telegram" ? <FaTelegramPlane className="w-5 h-5" /> : <FaWhatsapp className="w-5 h-5" />}
                Open {selectedChannelLabel}
              </a>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 border border-[#CADCFC]/40 hover:border-[#00246B] text-gray-700 font-semibold px-8 py-3 rounded-xl transition-all"
              >
                <FiShoppingBag className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#00246B] transition-colors">Home</Link>
          <FiChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-[#00246B] transition-colors">Shop</Link>
          <FiChevronRight className="w-3 h-3" />
          <Link href={`/shop/${product.slug}`} className="hover:text-[#001a4d] transition-colors truncate max-w-[120px]">{product.name}</Link>
          <FiChevronRight className="w-3 h-3" />
          <span className="text-[#00246B] font-medium">Order</span>
        </nav>

        {/* Back link */}
        <Link href={`/shop/${product.slug}`} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#001a4d] transition-colors mb-6">
          <FiArrowLeft className="w-3.5 h-3.5" />
          Back to product
        </Link>

        {!ADMIN_WHATSAPP && !ADMIN_TELEGRAM && (
          <div className="mb-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm flex items-start gap-3">
            <FiAlertCircle className="w-5 h-5 shrink-0" />
            <span>No order channel is set. Add <code className="font-mono bg-yellow-100 px-1 rounded">NEXT_PUBLIC_ADMIN_WHATSAPP</code> or <code className="font-mono bg-yellow-100 px-1 rounded">NEXT_PUBLIC_ADMIN_TELEGRAM</code> to your environment variables.</span>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Product Summary Card */}
          <div className="bg-white border border-[#CADCFC]/30 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#CADCFC]/20 border border-[#CADCFC]/30 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  categoryIcons[product.category]
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#00246B] uppercase tracking-wider mb-0.5 capitalize">{product.category}</p>
                <h1 className="text-lg font-extrabold text-gray-800 leading-tight">{product.name}</h1>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Total</p>
                <p className="text-2xl font-extrabold text-[#00246B]">€{currentPrice.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#CADCFC]/30 flex items-center justify-between">
              <span className="text-sm text-gray-600">Selected quantity</span>
              <span className="text-sm font-bold text-[#00246B] bg-[#CADCFC]/20 px-3 py-1 rounded-full">
                {sizeLabel}
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          {product.sizes?.length > 0 && (
            <div className="bg-white border border-[#CADCFC]/30 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                Choose Quantity
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.sizes.map((size, i) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(i)}
                    className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all text-center ${
                      selectedSize === i
                        ? "bg-[#00246B] text-white border-[#00246B] shadow-md shadow-[#CADCFC]/40"
                        : "bg-[#f8faff] text-gray-600 border-[#CADCFC]/40 hover:border-[#00246B] hover:bg-[#CADCFC]/20"
                    }`}
                  >
                    <span className="block font-bold">{size.label}</span>
                    <span className={`text-sm mt-0.5 block ${selectedSize === i ? "text-white/80" : "text-[#00246B]"}`}>€{size.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Order Form */}
          <div className="bg-white border border-[#CADCFC]/30 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-gray-800 mb-6">
              <FiUser className="w-5 h-5 text-[#00246B]" />
              Your Details
            </h3>

            <form onSubmit={handleOrder} className="space-y-4">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Choose How to Continue</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderChannel("whatsapp")}
                    disabled={!ADMIN_WHATSAPP}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                      orderChannel === "whatsapp" ? "border-[#00246B] bg-[#CADCFC]/20 ring-2 ring-[#00246B]/20" : "border-[#CADCFC]/40 bg-white hover:border-[#00246B]"
                    }`}
                  >
                    <FaWhatsapp className="w-6 h-6 text-[#00246B]" />
                    <span>
                      <span className="block text-sm font-bold text-gray-800">WhatsApp</span>
                      <span className="block text-xs text-gray-500">Send a direct message</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderChannel("telegram")}
                    disabled={!ADMIN_TELEGRAM}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                      orderChannel === "telegram" ? "border-sky-500 bg-sky-50 ring-2 ring-sky-500/20" : "border-[#CADCFC]/40 bg-white hover:border-sky-500"
                    }`}
                  >
                    <FaTelegramPlane className="w-6 h-6 text-sky-500" />
                    <span>
                      <span className="block text-sm font-bold text-gray-800">Telegram</span>
                      <span className="block text-xs text-gray-500">Continue privately in Telegram</span>
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-[#CADCFC]/40 text-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/30 focus:border-[#00246B] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-[#CADCFC]/40 text-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/30 focus:border-[#00246B] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                <div className="relative">
                  <FiPhone className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-[#CADCFC]/40 text-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/30 focus:border-[#00246B] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Shipping Address</label>
                <div className="relative">
                  <FiMapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="123 Main St, Berlin, Germany"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-white border border-[#CADCFC]/40 text-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/30 focus:border-[#00246B] placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message <span className="text-gray-500 font-normal normal-case">(optional)</span></label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
                  <textarea
                    placeholder="Any special requests or questions..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-[#CADCFC]/40 text-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00246B]/30 focus:border-[#00246B] placeholder:text-gray-400 resize-none"
                  />
                </div>
              </div>

              {/* Serious buyer check */}
              <label className="flex items-start gap-3 p-4 rounded-xl bg-[#CADCFC]/20 border border-[#CADCFC]/30 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#00246B]"
                />
                <span className="text-sm text-gray-600">
                  I am a serious buyer. I understand this is a real order request and I am ready to receive payment instructions via {selectedChannelLabel}.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting || !hasSelectedChannel}
                className="w-full flex items-center justify-center gap-2 bg-[#00246B] hover:bg-[#001a4d] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#CADCFC]/50 mt-2 text-base"
              >
                {submitting ? (
                  <FiLoader className="w-5 h-5 animate-spin" />
                ) : orderChannel === "telegram" ? (
                  <FaTelegramPlane className="w-5 h-5" />
                ) : (
                  <FaWhatsapp className="w-5 h-5" />
                )}
                {submitting ? `Opening ${selectedChannelLabel}...` : `Send Order to ${selectedChannelLabel} — €${currentPrice.toFixed(2)}`}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your order details are saved securely before {selectedChannelLabel} opens.
              </p>
            </form>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: FiShield, label: "Secure Order" },
              { icon: FiTruck, label: "Discreet Shipping" },
              { icon: FiPackage, label: "COA Included" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white border border-[#CADCFC]/30 rounded-xl p-3 flex flex-col items-center gap-1.5">
                <Icon className="w-5 h-5 text-[#00246B]" />
                <span className="text-xs font-semibold text-gray-600 text-center">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
