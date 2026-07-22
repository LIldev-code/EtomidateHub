"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
    open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  };

  const itemVariants = {
    closed: { x: 40, opacity: 0 },
    open: (i) => ({ x: 0, opacity: 1, transition: { delay: 0.1 + i * 0.08, duration: 0.35, ease: "easeOut" } }),
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-2.5">
            <div className="relative rounded-xl bg-orange-50 p-1.5 ring-1 ring-orange-100 transition-all duration-300 group-hover:ring-[#f59e0b] group-hover:shadow-md group-hover:shadow-orange-200/50">
              <img src="/logo.svg" alt="Etomidatesite.com" className="h-7 sm:h-8 transition-transform duration-300 group-hover:scale-105" />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-gray-600 transition-all duration-200 hover:scale-105 hover:text-[#ea7a17]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/shop"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#f59e0b] via-[#ea7a17] to-[#f59e0b] bg-[length:200%_100%] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-shimmer"
            >
              <FiShoppingBag className="h-4 w-4" />
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 rounded-lg p-2 text-gray-700 transition-colors hover:bg-orange-50 md:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiOutlineMenuAlt3 className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 z-40 h-full w-[280px] border-l border-orange-100 bg-white/98 shadow-2xl shadow-orange-900/10 backdrop-blur-xl md:hidden"
            >
              <div className="flex h-16 items-center justify-between px-5">
                <span className="text-sm font-bold text-gray-800">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-orange-50"
                  aria-label="Close menu"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2 px-4 pt-4">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-orange-50 hover:text-[#ea7a17]"
                    >
                      {l.label}
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-200 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={links.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="pt-4"
                >
                  <Link
                    href="/shop"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f59e0b] via-[#ea7a17] to-[#f59e0b] bg-[length:200%_100%] px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-200/40 animate-shimmer"
                  >
                    <FiShoppingBag className="w-4 h-4" />
                    Shop Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

