"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFlask, FaVial, FaTint, FaAppleAlt } from "react-icons/fa";
import { FiCheckCircle, FiShoppingBag, FiChevronRight, FiArrowRight, FiStar } from "react-icons/fi";
import { BsListCheck } from "react-icons/bs";

const categoryIcons = {
  powder: <FaFlask className="w-16 h-16 text-[#00246B]" />,
  vape: <FaVial className="w-16 h-16 text-[#00246B]" />,
  liquid: <FaTint className="w-16 h-16 text-[#00246B]" />,
  flavours: <FaAppleAlt className="w-16 h-16 text-[#00246B]" />,
};

export default function ProductDetailClient({ product }) {
  const [selectedSize, setSelectedSize] = useState(0);

  const currentPrice = product.sizes?.[selectedSize]?.price || product.price || 0;
  const currentLabel = product.sizes?.[selectedSize]?.label || "";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#001a4d] transition-colors">Home</Link>
        <FiChevronRight className="w-3 h-3" />
        <Link href="/shop" className="hover:text-[#001a4d] transition-colors">Shop</Link>
        <FiChevronRight className="w-3 h-3" />
        <span className="text-[#00246B] font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#f8faff] to-white border border-[#CADCFC]/30 rounded-2xl flex items-center justify-center h-80 lg:h-[500px] overflow-hidden relative"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="mb-4">
                {categoryIcons[product.category]}
              </div>
              <span className="text-sm font-semibold text-[#00246B] uppercase tracking-widest">
                {product.category}
              </span>
            </div>
          )}
          {/* Stock badge */}
          <div className="absolute top-4 left-4">
            {product.inStock ? (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-[#00246B]/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-red-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                Out of Stock
              </span>
            )}
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Rating */}
          <div className="flex items-center gap-0.5 mb-3">
            {[1,2,3,4,5].map((s) => (
              <FiStar key={s} className="w-4 h-4 text-[#00246B] fill-[#00246B]" />
            ))}
            <span className="text-xs text-gray-500 ml-1.5">5.0 (128 reviews)</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Specifications */}
          {product.specifications?.length > 0 && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#00246B] uppercase tracking-wider mb-3">
                <BsListCheck className="w-4 h-4 text-[#00246B]" />
                Specifications
              </h3>
              <ul className="space-y-2">
                {product.specifications.map((spec) => (
                  <li key={spec} className="text-sm text-gray-600 flex items-start gap-2.5">
                    <FiCheckCircle className="w-4 h-4 text-[#00246B] shrink-0 mt-0.5" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
                Choose Quantity
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, i) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(i)}
                    className={`px-5 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === i
                        ? "bg-[#00246B] text-white border-[#00246B] shadow-md shadow-[#CADCFC]/40"
                        : "bg-white text-gray-600 border-[#CADCFC]/40 hover:border-[#00246B] hover:bg-[#CADCFC]/20"
                    }`}
                  >
                    {size.label} — €{size.price.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="text-3xl font-extrabold text-[#00246B] mb-8">
            €{currentPrice.toFixed(2)}
          </div>

          {/* Order Button */}
          <Link
            href={`/order/${product.slug}${currentLabel ? `?size=${encodeURIComponent(currentLabel)}` : ""}`}
            className="w-full flex items-center justify-center gap-2 bg-[#00246B] hover:bg-[#001a4d] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#CADCFC]/50 text-lg"
          >
            <FiShoppingBag className="w-5 h-5" />
            Order Now — €{currentPrice.toFixed(2)}
            <FiArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 text-center mt-3">
            You&apos;ll fill your details and the order will be sent directly to our WhatsApp.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
