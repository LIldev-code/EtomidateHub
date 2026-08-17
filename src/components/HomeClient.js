"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiMail, FiArrowRight, FiCheckCircle, FiX, FiStar } from "react-icons/fi";
import { HiOutlineBeaker, HiOutlineTruck, HiOutlineLightningBolt, HiOutlineGlobe, HiOutlineSparkles } from "react-icons/hi";
import { BsShieldCheck, BsBoxSeam, BsHeadset, BsLightningCharge } from "react-icons/bs";
import { FaFlask, FaVial, FaTint, FaAppleAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProtectedImage from "@/components/ProtectedImage";
import SocialFloat from "@/components/SocialFloat";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const productIcons = {
  powder: <FaFlask className="w-20 h-20 text-[#00246B]" />,
  vape: <FaVial className="w-20 h-20 text-[#00246B]" />,
  liquid: <FaTint className="w-20 h-20 text-[#00246B]" />,
  flavours: <FaAppleAlt className="w-20 h-20 text-[#00246B]" />,
};

export default function HomeClient({ products, siteSettings = {} }) {
  const settings = siteSettings || {};
  const carouselSlides = [
    {
      title: "Premium Research Compounds",
      subtitle: "Lab-verified etomidate products with 99.8% purity. Browse, select, and order directly via WhatsApp.",
      cta: "Browse Products",
      href: "/shop",
      image: "/uploads/hub.jpeg",
    },
    {
      title: "Laboratory Tested & Certified",
      subtitle: "Every batch undergoes HPLC verification with full Certificate of Analysis included with your order.",
      cta: "Learn More",
      href: "/about",
      image: "/uploads/hub2.jpeg",
    },
    {
      title: "Global Discreet Delivery",
      subtitle: "Shipped worldwide in unmarked packaging within 48 hours. Professional support available 24/7.",
      cta: "Shop Now",
      href: "/shop",
      image: "/uploads/hub4.jpeg",
    },
    {
      title: "Advanced Research Facility",
      subtitle: "Sourced from GMP-certified laboratories with rigorous multi-stage quality control processes.",
      cta: "View Products",
      href: "/shop",
      image: "/uploads/hub1.avif",
    },
    {
      title: "Clinical-Grade Quality",
      subtitle: "Produced under strict GMP conditions with multi-stage analytical testing for every batch we ship.",
      cta: "Our Standards",
      href: "/about",
      image: "/uploads/clinical-laboratory.webp",
    },
    {
      title: "Trusted by Researchers",
      subtitle: "Serving universities, labs, and research facilities across 50+ countries with consistent quality.",
      cta: "Shop Now",
      href: "/shop",
      image: "/uploads/lab.webp",
    },
  ];
  const [bannerVisible, setBannerVisible] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  useEffect(() => {
    if (paused || !bannerVisible) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [paused, bannerVisible, nextSlide]);

  const slide = carouselSlides[slideIndex];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Etomidatehub.com",
    url: "https://etomidatehub.com",
    description: "Research product information, available quantities, and direct WhatsApp ordering.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://etomidatehub.com/shop?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — Compact card-based slider */}
      <section className="relative bg-[#00246B] py-10 md:py-14 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/hub4.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#00246B]/85" />
        </div>

        {/* Animated effects over the background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating gradient orbs */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-[#CADCFC]/15 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#CADCFC]/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1a4a9e]/20 rounded-full blur-[80px]"
          />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(#CADCFC 1px, transparent 1px), linear-gradient(90deg, #CADCFC 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              className="absolute w-1.5 h-1.5 bg-[#CADCFC] rounded-full"
              style={{
                left: `${10 + i * 11}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
            />
          ))}

          {/* Animated shimmer sweep */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-1/2"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top text */}
          <div className="text-center mb-8">
            <p className="text-[#CADCFC] text-sm font-semibold uppercase tracking-widest mb-2">Trusted Research Supplier</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Premium Compounds, Verified Purity
            </h1>
          </div>

          {/* Card slider */}
          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full grid md:grid-cols-2 gap-5 items-stretch"
                >
                  {/* Image card */}
                  <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={slideIndex === 0}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00246B]/50 to-transparent" />
                    {/* Image badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#00246B] text-xs font-bold px-3 py-1.5 rounded-full">
                      <BsShieldCheck className="w-3.5 h-3.5" />
                      COA Certified
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex flex-col justify-center bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {slide.title}
                    </h2>
                    <p className="text-[#CADCFC]/90 leading-relaxed mb-6">
                      {slide.subtitle}
                    </p>
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-2 bg-white text-[#00246B] font-bold px-6 py-3 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-white/15 hover:-translate-y-0.5 self-start"
                    >
                      {slide.cta}
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === slideIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSlideIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-all"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-all"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


        </div>
      </section>

      
      {/* Trust Badges — Icon grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: <BsShieldCheck className="w-6 h-6" />, 
                title: "Lab Verified", 
                sub: "HPLC tested with COA on every order" 
              },
              { 
                icon: <HiOutlineTruck className="w-6 h-6" />, 
                title: "Discreet Delivery", 
                sub: "Unmarked packaging, full tracking" 
              },
              { 
                icon: <HiOutlineGlobe className="w-6 h-6" />, 
                title: "50+ Countries", 
                sub: "Worldwide shipping within 48 hours" 
              },
              { 
                icon: <BsHeadset className="w-6 h-6" />, 
                title: "24/7 Support", 
                sub: "Real humans via Telegram & WhatsApp" 
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#00246B] rounded-xl flex items-center justify-center text-white">
                  {b.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{b.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category — Tabbed */}
      <ProductTabs products={products} />

      {/* Testimonials */}
      <section className="bg-[#f8faff] py-16 md:py-20 border-y border-[#CADCFC]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 mt-2">Real feedback from verified buyers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Dr. K.",
                location: "Germany",
                text: "Purity was exactly as listed. COA matched our in-house HPLC results. Will order again.",
              },
              {
                name: "James R.",
                location: "United Kingdom",
                text: "Fast shipping, discreet package, and responsive support team. Exactly what you want from a supplier.",
              },
              {
                name: "Lab Tech M.",
                location: "Canada",
                text: "We switched from our previous vendor. Better purity, better pricing, and much faster delivery times.",
              },
              {
                name: "Sarah L.",
                location: "Australia",
                text: "Ordering through Telegram was surprisingly smooth. Got tracking within 24 hours of payment.",
              },
              {
                name: "Prof. Chen",
                location: "Singapore",
                text: "Consistent quality across multiple orders. The COA documentation is thorough and professional.",
              },
              {
                name: "Research Dept.",
                location: "Netherlands",
                text: "Reliable supplier with excellent communication. Package arrived in perfect condition.",
              },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-xl p-6 border border-[#CADCFC]/20 hover:shadow-md hover:shadow-[#CADCFC]/10 transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <FiStar key={s} className="w-4 h-4 text-[#00246B] fill-[#00246B]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#00246B] flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Timeline style */}
      <section className="relative bg-[#00246B] py-16 md:py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/uploads/hub.jpeg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#00246B]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">How To Order</h2>
            <p className="text-[#CADCFC]/70 mt-2">Simple, secure, and fast</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#CADCFC]/30 via-[#CADCFC]/50 to-[#CADCFC]/30" />

            {[
              {
                icon: <FiShoppingBag className="w-6 h-6" />,
                title: "Browse Products",
                desc: "View our catalog with detailed purity data, pricing, and available quantities.",
              },
              {
                icon: <FiMail className="w-6 h-6" />,
                title: "Place Your Order",
                desc: "Message us on Telegram or WhatsApp to confirm details and arrange payment.",
              },
              {
                icon: <FiCheckCircle className="w-6 h-6" />,
                title: "Fast Delivery",
                desc: "Shipped within 48 hours in discreet packaging with tracking number provided.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#00246B] mb-5 shadow-lg shadow-white/10">
                  {item.icon}
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#CADCFC] text-[#00246B] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#CADCFC]/80 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SocialFloat />

          </>
  );
}

/* ─── Product Tabs by Category ─── */
const categoryMeta = {
  powder: { label: "Powder / Crystal", icon: <FaFlask className="w-4 h-4" /> },
  vape: { label: "Vape / K-Pods", icon: <FaVial className="w-4 h-4" /> },
  liquid: { label: "Liquid", icon: <FaTint className="w-4 h-4" /> },
  "vape flavours": { label: "Vape Flavours", icon: <FaAppleAlt className="w-4 h-4" /> },
};

function ProductTabs({ products }) {
  const categories = ["powder", "vape", "liquid", "vape flavours"].filter((cat) =>
    products.some((p) => p.category === cat)
  );
  const [activeTab, setActiveTab] = useState(categories[0] || "powder");
  const gridRef = useRef(null);

  const filtered = products.filter((p) => p.category === activeTab).slice(0, 6);

  useEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".product-card");
    gsap.killTweensOf(cards);
    gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });
    gsap.to(cards, {
      opacity: 1, y: 0, scale: 1,
      duration: 0.6, stagger: 0.12, ease: "power3.out",
      clearProps: "transform",
    });
  }, [activeTab, filtered.length]);

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CADCFC]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#CADCFC]/20 border border-[#CADCFC]/30 text-[#00246B] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <FaFlask className="w-3.5 h-3.5" />
            Our Catalog
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Shop Our <span className="text-[#00246B]">Products</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Browse our collection of high-quality products in various formulations, all lab-verified for purity and consistency.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 bg-[#f8faff] border border-[#CADCFC]/30 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 ${
                  activeTab === cat ? "text-white" : "text-gray-500 hover:text-[#00246B]"
                }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#00246B] rounded-xl shadow-md shadow-[#00246B]/20"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {categoryMeta[cat]?.icon}
                  {categoryMeta[cat]?.label || cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div ref={gridRef}>
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600">No products in this category yet.</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${filtered.length === 1 ? "grid-cols-1 max-w-xl mx-auto" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
              {filtered.map((product) => (
                <div key={product._id || product.slug} className="product-card group">
                  {/* Card Container */}
                  <div className="relative h-full bg-gradient-to-b from-[#f8faff] to-white border border-[#CADCFC]/30 rounded-[2rem] p-3 transition-all duration-500 hover:border-[#00246B]/40 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.35)] hover:-translate-y-2">

                    {/* Soft glow behind card on hover */}
                    <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#00246B]/0 via-[#CADCFC]/0 to-[#00246B]/0 group-hover:from-[#00246B]/10 group-hover:via-transparent group-hover:to-[#00246B]/10 transition-all duration-500 pointer-events-none" />

                    {/* Image Section — rounded inner frame */}
                    <div className="relative h-60 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#CADCFC]/10 via-[#f8faff] to-[#CADCFC]/10 image-container no-context-menu">
                      {product.image ? (
                        <ProtectedImage 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.08]" 
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="scale-110 opacity-50">
                            {productIcons[product.category]}
                          </div>
                        </div>
                      )}

                      {/* Soft bottom fade */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md ${
                          product.inStock 
                            ? "bg-white/85 text-emerald-600" 
                            : "bg-white/85 text-red-500"
                        }`}>
                          {product.inStock ? (
                            <>
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                              In Stock
                            </>
                          ) : (
                            "Out of Stock"
                          )}
                        </span>
                      </div>

                      {/* Category chip */}
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-[#00246B] bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                          {categoryMeta[product.category]?.icon}
                          {product.category}
                        </span>
                      </div>

                      {/* Floating price tag */}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-baseline gap-1 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg shadow-black/5">
                          <span className="text-lg font-extrabold text-gray-800">
                            €{(product.sizes?.length > 1 ? product.sizes[0].price : product.price)?.toFixed(2)}
                          </span>
                          {product.sizes?.length > 1 && (
                            <span className="text-[11px] font-semibold text-gray-500">
                              – €{product.sizes[product.sizes.length - 1].price?.toFixed(2)}
                            </span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-4 pt-5 pb-4">
                      {/* Stars + reviews hint */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="flex items-center gap-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <FiStar key={s} className="w-3.5 h-3.5 text-[#00246B] fill-[#00246B]" />
                          ))}
                        </div>
                        <span className="text-[11px] font-medium text-gray-400">5.0</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold text-gray-800 mb-2 leading-snug group-hover:text-[#00246B] transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                        {product.shortDescription || product.description || "Premium quality pharmaceutical-grade product"}
                      </p>

                      {/* CTA Button */}
                      <Link
                        href={`/shop/${product.slug}`}
                        className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-300 ${
                          product.inStock
                            ? "bg-gradient-to-r from-[#00246B] to-[#001a4d] text-white shadow-md shadow-[#00246B]/20 hover:shadow-xl hover:shadow-[#00246B]/35 hover:scale-[1.03] active:scale-[0.98]"
                            : "bg-[#CADCFC]/40 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {product.inStock ? (
                          <>
                            View Details
                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        ) : (
                          "Out of Stock"
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}







