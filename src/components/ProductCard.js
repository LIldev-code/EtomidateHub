"use client";
import Link from "next/link";
import { FaFlask, FaVial, FaTint } from "react-icons/fa";
import { FiArrowRight, FiCheckCircle, FiXCircle, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const categoryIcons = {
  powder: <FaFlask className="w-12 h-12 text-[#00246B]" />,
  vape: <FaVial className="w-12 h-12 text-[#00246B]" />,
  liquid: <FaTint className="w-12 h-12 text-[#00246B]" />,
};

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-[#CADCFC]/40 overflow-hidden hover:border-[#00246B]/50 hover:shadow-[0_0_30px_rgba(0,36,107,0.1)] transition-all group"
    >
      {/* Product image */}
      <div className="h-56 bg-gradient-to-br from-[#f8faff] to-[#CADCFC]/20 flex items-center justify-center relative overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-center">
            <div className="mb-2 transition-transform group-hover:scale-110 duration-300">
              {categoryIcons[product.category]}
            </div>
            <span className="text-xs font-semibold text-[#00246B] uppercase tracking-widest">
              {product.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#00246B] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map((s) => (
              <FiStar key={s} className="w-3.5 h-3.5 text-[#00246B] fill-[#00246B]" />
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-[#00246B]">
            €{product.price.toFixed(2)}
          </span>
          <Link
            href={`/shop/${product.slug}`}
            className="flex items-center gap-1.5 bg-[#00246B] hover:bg-[#001a4d] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-md hover:shadow-[#00246B]/20 group/btn"
          >
            View Details
            <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {product.inStock ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#00246B] bg-[#CADCFC]/30 px-2.5 py-1 rounded-full">
            <FiCheckCircle className="w-3 h-3" />
            In Stock
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">
            <FiXCircle className="w-3 h-3" />
            Out of Stock
          </span>
        )}
      </div>
    </motion.div>
  );
}


