import Link from "next/link";
import { FiMail, FiPhone, FiTruck, FiArrowRight } from "react-icons/fi";
import { FaFlask, FaVial, FaTint } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-orange-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#fed7aa] to-[#f59e0b]" />
      <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="max-w-md lg:col-span-5">
            <div className="mb-5 inline-flex rounded-2xl bg-orange-50 p-3 ring-1 ring-orange-100">
              <img src="/logo.svg" alt="Etomidatesite.com" className="h-10" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Clear information. Direct ordering.</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Explore available products, review key details, and contact our team directly when you&apos;re ready to order.
            </p>
            <Link href="/shop" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ea7a17] transition-colors hover:text-[#c65d0a]">
              Browse products
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gray-900">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shop" className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-[#ea7a17]">
                  <FiArrowRight className="h-3.5 w-3.5 text-[#f59e0b] transition-transform group-hover:translate-x-1" />
                  All products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=powder" className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-[#ea7a17]">
                  <FaFlask className="h-3.5 w-3.5 text-[#f59e0b]" />
                  Powder
                </Link>
              </li>
              <li>
                <Link href="/shop?category=vape" className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-[#ea7a17]">
                  <FaVial className="h-3.5 w-3.5 text-[#f59e0b]" />
                  K-Pods
                </Link>
              </li>
              <li>
                <Link href="/shop?category=liquid" className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-[#ea7a17]">
                  <FaTint className="h-3.5 w-3.5 text-[#f59e0b]" />
                  Liquid
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-[#ea7a17]">
                  <FiArrowRight className="h-3.5 w-3.5 text-[#f59e0b] transition-transform group-hover:translate-x-1" />
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="rounded-3xl border border-orange-200 bg-[#fffaf5] p-6 shadow-sm shadow-orange-100/60 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ea7a17]">Need help?</h4>
            <p className="mt-3 text-lg font-bold text-gray-900">Talk to our support team</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">Questions about products or an existing order? Send us a message and we&apos;ll assist you.</p>
            <a href="mailto:orders@etomidatesite.com" className="mt-5 flex items-center gap-2 text-sm font-semibold text-gray-800 transition-colors hover:text-[#ea7a17]">
              <FiMail className="h-4 w-4 text-[#f59e0b]" />
              orders@etomidatesite.com
            </a>
            <div className="mt-5 flex items-start gap-2 border-t border-orange-200 pt-4 text-xs leading-5 text-gray-600">
              <FiTruck className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
              Orders are prepared and dispatched in discreet packaging.
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-orange-100 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Etomidatesite.com. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="transition-colors hover:text-[#ea7a17]">Contact</Link>
            <Link href="/about" className="transition-colors hover:text-[#ea7a17]">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


