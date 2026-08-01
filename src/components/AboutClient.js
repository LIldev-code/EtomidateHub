"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsBoxSeam, BsPeople, BsLightningCharge } from "react-icons/bs";
import { FiTarget, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function AboutClient({ aboutText }) {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero — Dark navy header with background image */}
      <div className="relative bg-[#00246B] py-16 md:py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/hub2.jpeg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#00246B]/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#CADCFC] text-sm font-semibold uppercase tracking-widest mb-4">About Etomidatehub</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Your Trusted Partner in Research
            </h1>
            <p className="text-[#CADCFC]/90 text-lg max-w-2xl mx-auto leading-relaxed">
              With 7 years of experience, we have been delivering premium-grade etomidate compounds to research facilities, 
              universities, and laboratories across 50+ countries worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              { value: "7+", label: "Years Active" },
              { value: "2,000+", label: "Customers Served" },
              { value: "50+", label: "Countries" },
              { value: "99.8%", label: "Min. Purity" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg shadow-[#00246B]/5 border border-[#CADCFC]/30 p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00246B]">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Text */}
        {aboutText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-[#f8faff] border-l-4 border-[#00246B] rounded-r-xl p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                &ldquo;{aboutText}&rdquo;
              </p>
            </div>
          </motion.div>
        )}

        {/* Image + text section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-72 md:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src="/uploads/hub2.jpeg"
              alt="Our laboratory facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00246B]/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Researchers Choose Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We bridge the gap between pharmaceutical manufacturers and research facilities. 
              Our streamlined process ensures you get verified, high-purity compounds delivered 
              quickly and discreetly — no unnecessary complexity.
            </p>
            <ul className="space-y-3">
              {[
                "HPLC-verified purity on every batch",
                "Certificate of Analysis included with orders",
                "Discreet, tamper-proof packaging",
                "Responsive human support team",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <FiCheckCircle className="w-4 h-4 text-[#00246B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What Drives Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              icon: <FiTarget className="w-5 h-5" />,
              title: "Clear Mission",
              text: "Making premium research compounds accessible with transparent pricing, verified quality, and straightforward ordering.",
            },
            {
              icon: <HiOutlineShieldCheck className="w-5 h-5" />,
              title: "Uncompromising Quality",
              text: "Multi-stage testing including HPLC verification, GC-MS screening, and NMR confirmation. Every shipment includes full documentation.",
            },
            {
              icon: <BsBoxSeam className="w-5 h-5" />,
              title: "Total Discretion",
              text: "Vacuum-sealed containers, tamper-evident seals, and plain outer packaging. No identifying marks, complete privacy guaranteed.",
            },
            {
              icon: <BsPeople className="w-5 h-5" />,
              title: "Real Support",
              text: "Talk directly with professionals who understand your needs. No chatbots, no automated replies — just real people ready to help.",
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group bg-[#f8faff] rounded-xl p-6 hover:bg-white hover:shadow-lg hover:shadow-[#CADCFC]/20 border border-transparent hover:border-[#CADCFC]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#00246B] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#00246B] rounded-2xl p-10 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h3>
            <p className="text-[#CADCFC]/80 mb-6 max-w-lg mx-auto">
              Browse our catalog and find the right products for your research needs.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-white text-[#00246B] font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
            >
              Browse Products
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
