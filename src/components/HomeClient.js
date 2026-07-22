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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const productIcons = {
  powder: <FaFlask className="w-20 h-20 text-[#f59e0b]" />,
  vape: <FaVial className="w-20 h-20 text-[#f59e0b]" />,
  liquid: <FaTint className="w-20 h-20 text-[#f59e0b]" />,
  flavours: <FaAppleAlt className="w-20 h-20 text-[#f59e0b]" />,
};

export default function HomeClient({ products, siteSettings = {} }) {
  const settings = siteSettings || {};
  const carouselSlides = [
    {
      title: "Research Products, Made Simple",
      subtitle: "Browse available products, select your preferred quantity, and send your order directly through WhatsApp.",
      cta: "Browse Products",
      href: "/shop",
      image: "/uploads/lab.webp",
    },
    {
      title: "Clear Product Information",
      subtitle: "Review product details, available quantities, and Certificates of Analysis before placing an order.",
      cta: "Learn More",
      href: "/about",
      image: "/uploads/clinical-laboratory.webp",
    },
    {
      title: "Straightforward Support",
      subtitle: "Need assistance with an order or product enquiry? Our support team is ready to help.",
      cta: "Contact Us",
      href: "/contact",
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
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [paused, bannerVisible, nextSlide]);

  const slide = carouselSlides[slideIndex];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Etomidatesite.com",
    url: "https://etomidatesite.com",
    description: "Research product information, available quantities, and direct WhatsApp ordering.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://etomidatesite.com/shop?q={search_term_string}",
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

      {/* Hero Carousel Banner */}
      <div className="relative h-[500px] overflow-hidden hero-gradient-bg">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 hero-purple-glow" />
        
        {/* Animated decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f59e0b]/20 rounded-full blur-[100px] animated-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea7a17]/15 rounded-full blur-[120px] animated-blob-delayed" />
        
        {/* Background images with crossfade and animations */}
        <AnimatePresence mode="sync">
          {carouselSlides.map((slide, index) => (
            index === slideIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: "8%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-8%" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              {/* Custom CSS gradient background */}
              <div className={`absolute inset-0 ${
                index === 0 ? 'slide-bg-1' : 
                index === 1 ? 'slide-bg-2' : 
                'slide-bg-3'
              }`} />
              
              {/* Decorative geometric shapes */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Hexagon grid pattern */}
                <svg className="absolute w-full h-full opacity-[0.035]" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`hex-${index}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <polygon points="5,1 9,3 9,7 5,9 1,7 1,3" fill="none" stroke="#f59e0b" strokeWidth="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#hex-${index})`} />
                </svg>
                
                {/* Floating circles */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#f59e0b]/10 blur-[80px] pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ea7a17]/10 blur-[100px] pulse-glow" style={{ animationDelay: '2s' }} />
                
                {/* Diagonal lines */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full" style={{ 
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #f59e0b 35px, #f59e0b 36px)'
                  }} />
                </div>
              </div>
              
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/10 to-transparent"
                animate={{
                  opacity: index === slideIndex ? [0.5, 0.7, 0.5] : 0.5,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Clean star field effect */}
              <div className="absolute inset-0 overflow-hidden hidden">
                {/* Static stars - deterministic positions */}
                {[...Array(30)].map((_, i) => {
                  const seed = i * 137.5; // Golden angle for better distribution
                  const x = (seed * 9.7) % 100;
                  const y = (seed * 13.3) % 100;
                  const size = 1 + (i % 3) * 0.5;
                  const opacity = 0.3 + (i % 5) * 0.1;
                  
                  return (
                    <div
                      key={`star-${i}`}
                      className="absolute bg-[#ffffff] rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}%`,
                        top: `${y}%`,
                        opacity,
                      }}
                    />
                  );
                })}
                
                {/* Animated twinkling stars - deterministic */}
                {[...Array(10)].map((_, i) => {
                  const seed = i * 89.7;
                  const x = (seed * 11.3) % 100;
                  const y = (seed * 7.9) % 100;
                  const size = 1.5 + (i % 2) * 0.5;
                  
                  return (
                    <motion.div
                      key={`twinkle-${i}`}
                      className="absolute bg-[#ffffff] rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      animate={{
                        opacity: index === slideIndex ? [0.3, 1, 0.3] : 0.3,
                        scale: index === slideIndex ? [1, 1.5, 1] : 1,
                      }}
                      transition={{
                        duration: 2 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
                
                {/* Shooting stars - deterministic */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`shooting-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      width: '60px',
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 15}%`,
                    }}
                    animate={{
                      x: index === slideIndex ? [-100, 400] : -100,
                      opacity: index === slideIndex ? [0, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 4,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Content overlay */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <AnimatePresence mode="sync">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-8 items-center h-full"
              >
                {/* Text column */}
                <div className="text-center lg:text-left z-10">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#ea7a17] text-black font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-[#f59e0b]/25"
                  >
                    {slide.cta}
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Laboratory image — circular floating design on desktop, background on mobile */}
                <div className="absolute inset-0 lg:static lg:flex lg:items-center lg:justify-center lg:h-full z-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full lg:w-[420px] lg:h-[420px]"
                  >
                    {/* Rotating outer rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-5 rounded-full border-2 border-dashed border-orange-200/60 hidden lg:block"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-10 rounded-full border border-orange-100/40 hidden lg:block"
                    />

                    {/* Circular image */}
                    <div className="relative w-full h-full lg:rounded-full overflow-hidden lg:ring-[6px] lg:ring-orange-100 lg:shadow-2xl lg:shadow-orange-900/10">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={slide.image}
                          alt={`Laboratory research - ${slide.title}`}
                          fill
                          className="object-cover"
                          priority={slideIndex === 0}
                          sizes="(min-width: 1024px) 420px, 100vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75 lg:bg-gradient-to-t lg:from-[#ea7a17]/10 lg:via-transparent lg:to-transparent" />
                    </div>

                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setSlideIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
          className="absolute z-20 left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm border border-orange-200 flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-20 right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm border border-orange-200 flex items-center justify-center text-gray-800 hover:bg-white/90 transition-all"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === slideIndex
                  ? "w-8 bg-[#f59e0b]"
                  : "w-2 bg-orange-200/70 hover:bg-orange-300/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      
      {/* Trust Badges — Clean Horizontal Cards */}
      <section className="relative border-y border-orange-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest">Why Researchers Trust Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3">
              Excellence in Every Aspect
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <BsShieldCheck className="w-7 h-7 text-[#f59e0b]" />, 
                title: "Verified Purity", 
                sub: "HPLC-tested batches with COA documentation for complete transparency." 
              },
              { 
                icon: <HiOutlineTruck className="w-7 h-7 text-[#f59e0b]" />, 
                title: "Stealth Shipping", 
                sub: "Unmarked packages with tracking. Your privacy is our absolute priority." 
              },
              { 
                icon: <HiOutlineGlobe className="w-7 h-7 text-[#f59e0b]" />, 
                title: "Global Reach", 
                sub: "Delivering to 50+ countries with customs-compliant documentation." 
              },
              { 
                icon: <BsHeadset className="w-7 h-7 text-[#f59e0b]" />, 
                title: "Expert Support", 
                sub: "Real humans, not bots. Technical guidance and order assistance 24/7." 
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group"
              >
                <div className="relative flex items-start gap-5 rounded-2xl bg-[#fffaf5] p-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-orange-100/50">
                  <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-[#f59e0b]" />
                  <div className="ml-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-orange-100">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1.5">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {b.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category — Tabbed */}
      <ProductTabs products={products} />

      {/* Testimonials — Redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#fffaf5]">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[200px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[200px] -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest">Customer Feedback</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mt-3 mb-4">
              A Clearer <span className="text-[#f59e0b]">Ordering Experience</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Feedback from customers who value clear information, responsive communication, and straightforward ordering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Verified Customer",
                text: "The product information was easy to review, and the WhatsApp ordering process was clear from start to finish.",
                rating: 5,
              },
              {
                name: "Returning Customer",
                text: "I appreciated being able to select a quantity first and ask questions directly before confirming my order.",
                rating: 5,
              },
              {
                name: "Research Buyer",
                text: "Clear communication and straightforward updates made the ordering experience simple and reliable.",
                rating: 5,
              },
              {
                name: "Verified Customer 2",
                text: "The site made it easy to compare the available options and get support when I needed it.",
                rating: 5,
              },
              {
                name: "Returning Customer 2",
                text: "Product details were presented clearly, and the team responded to my enquiry promptly.",
                rating: 5,
              },
              {
                name: "Research Buyer 2",
                text: "A clean ordering flow with helpful communication throughout the process.",
                rating: 5,
              },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group relative bg-gradient-to-br from-white to-[#fffaf5] border border-orange-100 rounded-3xl p-8 hover:border-[#f59e0b]/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-bl-3xl" />
                
                <div className="flex items-center gap-1 mb-5">
                  {[1,2,3,4,5].map((s) => (
                    <FiStar key={s} className={`w-5 h-5 ${s <= review.rating ? "text-[#f59e0b] fill-[#f59e0b]" : "text-gray-700"}`} />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-orange-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 flex items-center justify-center text-[#f59e0b] font-bold ring-1 ring-[#f59e0b]/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white border-t border-orange-100">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest">Our Promise</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mt-3 mb-6">
                Building Trust Through <span className="text-[#f59e0b]">Transparency</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Since 2019, we&apos;ve served over 2,000 research facilities across 50+ countries. 
                Our commitment isn&apos;t just to supply chemicals—it&apos;s to advance scientific discovery 
                with integrity and reliability.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#fffaf5] border border-orange-100 rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-[#f59e0b]">99.8%</div>
                  <div className="text-sm text-gray-600">Minimum Purity</div>
                </div>
                <div className="bg-[#fffaf5] border border-orange-100 rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-[#f59e0b]">48h</div>
                  <div className="text-sm text-gray-600">Avg. Dispatch</div>
                </div>
                <div className="bg-[#fffaf5] border border-orange-100 rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-[#f59e0b]">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {[
                {
                  icon: <BsShieldCheck className="w-6 h-6 text-[#f59e0b]" />,
                  title: "Uncompromising Quality",
                  desc: "Every batch undergoes triple-verification testing. HPLC, GC-MS, and NMR analysis included with every order.",
                },
                {
                  icon: <BsBoxSeam className="w-6 h-6 text-[#f59e0b]" />,
                  title: "Military-Grade Discretion",
                  desc: "Vacuum-sealed, tamper-proof packaging. No logos, no labels, no indication of contents. Your privacy is absolute.",
                },
                {
                  icon: <BsHeadset className="w-6 h-6 text-[#f59e0b]" />,
                  title: "Real Human Support",
                  desc: "No chatbots. No automated responses. Reach actual scientists and logistics experts who understand your needs.",
                },
                {
                  icon: <HiOutlineBeaker className="w-6 h-6 text-[#f59e0b]" />,
                  title: "Research Partnership",
                  desc: "We don&apos;t just sell compounds. We collaborate on protocols, provide technical guidance, and support your success.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group flex gap-5 bg-[#fffaf5]/50 border border-orange-100 rounded-2xl p-6 hover:border-[#f59e0b]/40 hover:bg-[#fffaf5] transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 rounded-xl flex items-center justify-center ring-1 ring-[#f59e0b]/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#f59e0b] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

  const filtered = products.filter((p) => p.category === activeTab);

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Shop <span className="text-[#f59e0b]">Products</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Browse our collection of high-quality products in various formulations.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat
                  ? "bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20"
                  : "bg-[#fffaf5] text-gray-600 border border-orange-100 hover:border-[#f59e0b]/40 hover:text-gray-800"
              }`}
            >
              {categoryMeta[cat]?.icon}
              {categoryMeta[cat]?.label || cat}
            </button>
          ))}
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
                  <div className="relative bg-white border border-orange-100 rounded-3xl overflow-hidden hover:border-[#f59e0b]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f59e0b]/10 hover:-translate-y-1">
                    
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden bg-[#fffaf5] image-container no-context-menu">
                      {product.image ? (
                        <ProtectedImage 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="scale-110 opacity-50">
                            {productIcons[product.category]}
                          </div>
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#f59e0b]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm ${
                          product.inStock 
                            ? "bg-orange-100 text-orange-700 border border-orange-200" 
                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}>
                          {product.inStock ? (
                            <>
                              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
                              In Stock
                            </>
                          ) : (
                            "Out of Stock"
                          )}
                        </span>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center text-sm font-bold text-gray-800 bg-white/90 backdrop-blur-sm border border-orange-100 px-3 py-1.5 rounded-full">
                          From €{product.price?.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">
                          {product.category}
                        </span>
                        <span className="text-gray-600">•</span>
                        <div className="flex items-center gap-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <FiStar key={s} className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#f59e0b] transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {product.shortDescription || product.description || "Premium quality pharmaceutical-grade product"}
                      </p>

                      {/* Price Range */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-[#f59e0b]">
                          {product.sizes?.length > 1
                            ? `€${product.sizes[0].price?.toFixed(2)}`
                            : `€${product.price?.toFixed(2)}`
                          }
                        </span>
                        {product.sizes?.length > 1 && (
                          <span className="text-sm text-gray-600 ml-2">
                            — €{product.sizes[product.sizes.length - 1].price?.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/shop/${product.slug}`}
                        className={`w-full flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
                          product.inStock
                            ? "bg-[#f59e0b] hover:bg-[#ea7a17] text-black hover:shadow-lg hover:shadow-[#f59e0b]/25 hover:scale-105"
                            : "bg-orange-100/70 text-gray-600 cursor-not-allowed"
                        }`}
                      >
                        {product.inStock ? (
                          <>
                            View Details
                            <FiArrowRight className="w-4 h-4" />
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







