import Link from "next/link";
import { FiMail, FiTruck, FiArrowRight, FiShield, FiGlobe, FiClock } from "react-icons/fi";
import { FaFlask, FaVial, FaTint, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const ADMIN_TELEGRAM = process.env.NEXT_PUBLIC_ADMIN_TELEGRAM || "";
const ADMIN_WHATSAPP = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || "";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#00246B] text-white">
      {/* Top wave separator */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60V30C240 5 480 0 720 15C960 30 1200 55 1440 30V60H0Z" fill="#00246B" />
        </svg>
      </div>

      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <BsShieldCheck className="w-5 h-5 text-[#CADCFC]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Lab Verified</p>
                <p className="text-xs text-[#CADCFC]/70">HPLC tested, COA included</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <FiGlobe className="w-5 h-5 text-[#CADCFC]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Worldwide Shipping</p>
                <p className="text-xs text-[#CADCFC]/70">50+ countries served</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <FiClock className="w-5 h-5 text-[#CADCFC]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Fast Dispatch</p>
                <p className="text-xs text-[#CADCFC]/70">Orders ship within 48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src="/logo-white.svg" alt="Etomidatehub.com" className="h-10" />
            </div>
            <p className="text-sm text-[#CADCFC]/80 leading-relaxed mb-6">
              Your trusted source for premium research compounds. Lab-verified purity, discreet shipping worldwide.
            </p>
            <div className="flex items-center gap-3">
              {ADMIN_TELEGRAM && (
                <a href={`https://t.me/${ADMIN_TELEGRAM.replace(/^@/, "")}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#CADCFC] hover:bg-white/20 hover:text-white transition-all">
                  <FaTelegramPlane className="w-4 h-4" />
                </a>
              )}
              {ADMIN_WHATSAPP && (
                <a href={`https://wa.me/${ADMIN_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#CADCFC] hover:bg-white/20 hover:text-white transition-all">
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              )}
              <a href="mailto:orders@etomidatehub.com" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#CADCFC] hover:bg-white/20 hover:text-white transition-all">
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop?category=powder" className="group flex items-center gap-2.5 text-sm text-[#CADCFC]/80 hover:text-white transition-colors">
                  <FaFlask className="w-3.5 h-3.5 text-[#CADCFC]/50 group-hover:text-[#CADCFC]" />
                  Etomidate Powder
                </Link>
              </li>
              <li>
                <Link href="/shop?category=vape" className="group flex items-center gap-2.5 text-sm text-[#CADCFC]/80 hover:text-white transition-colors">
                  <FaVial className="w-3.5 h-3.5 text-[#CADCFC]/50 group-hover:text-[#CADCFC]" />
                  K-Pods &amp; Vape
                </Link>
              </li>
              <li>
                <Link href="/shop?category=liquid" className="group flex items-center gap-2.5 text-sm text-[#CADCFC]/80 hover:text-white transition-colors">
                  <FaTint className="w-3.5 h-3.5 text-[#CADCFC]/50 group-hover:text-[#CADCFC]" />
                  Liquid Solutions
                </Link>
              </li>
              <li>
                <Link href="/shop" className="group flex items-center gap-2.5 text-sm text-[#CADCFC]/80 hover:text-white transition-colors">
                  <FiArrowRight className="w-3.5 h-3.5 text-[#CADCFC]/50 group-hover:text-[#CADCFC] group-hover:translate-x-0.5 transition-transform" />
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-[#CADCFC]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-[#CADCFC]/80 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h4 className="text-sm font-bold text-white mb-2">Ready to Order?</h4>
              <p className="text-xs text-[#CADCFC]/70 leading-relaxed mb-4">
                Browse our catalog, select your products, and reach out via Telegram or WhatsApp to place your order.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 w-full justify-center bg-white text-[#00246B] font-semibold text-sm px-5 py-3 rounded-lg hover:shadow-lg hover:shadow-white/10 transition-all"
              >
                Browse Products
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#CADCFC]/60">
            <span>&copy; {new Date().getFullYear()} Etomidatehub.com. All rights reserved.</span>
            <div className="flex items-center gap-1.5">
              <FiTruck className="w-3.5 h-3.5" />
              <span>Discreet worldwide shipping on all orders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
