"use client";
import { motion } from "framer-motion";
import { HiOutlineBeaker, HiOutlineShieldCheck } from "react-icons/hi";
import { BsBoxSeam, BsPeople } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const sections = [
  {
    icon: <FiTarget className="w-6 h-6 text-[#f59e0b]" />,
    title: "Our Mission",
    text: "Founded in 2019, Etomidatesite emerged from a simple observation: researchers needed a supplier they could trust. We bridge the gap between pharmaceutical manufacturers and research facilities, ensuring that scientists have access to verified, high-purity compounds without the typical industry headaches.",
  },
  {
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-[#f59e0b]" />,
    title: "Quality Without Compromise",
    text: "Every product in our catalog undergoes rigorous multi-stage testing. Our quality control includes HPLC purity verification, GC-MS contaminant screening, and NMR structural confirmation. We don't just meet industry standards—we exceed them. Every shipment includes complete Certificates of Analysis.",
  },
  {
    icon: <BsBoxSeam className="w-6 h-6 text-[#f59e0b]" />,
    title: "Discretion as Standard",
    text: "We understand that privacy matters. Our packaging protocol ensures complete anonymity: vacuum-sealed inner containers, tamper-evident seals, and plain outer packaging with no identifying marks. Whether shipping to a university lab or private research facility, your order arrives securely and confidentially.",
  },
  {
    icon: <BsPeople className="w-6 h-6 text-[#f59e0b]" />,
    title: "Scientists Supporting Scientists",
    text: "Our support team isn't outsourced to a call center. You'll speak directly with professionals who understand chemistry, research protocols, and logistics. Need help selecting the right compound form? Troubleshooting storage conditions? We're here to collaborate, not just transact.",
  },
];

export default function AboutClient({ aboutText }) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            About <span className="text-[#f59e0b]">Etomidatesite</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Your partner in pharmaceutical research. We supply verified etomidate compounds 
            to laboratories, universities, and research facilities worldwide.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { value: "5+", label: "Years Active" },
            { value: "2000+", label: "Research Partners" },
            { value: "50+", label: "Countries Served" },
            { value: "99.8%", label: "Purity Standard" },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* About Text */}
        {aboutText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent border-l-4 border-[#f59e0b] rounded-r-2xl p-8">
              <p className="text-gray-600 text-lg leading-relaxed italic">
                &ldquo;{aboutText}&rdquo;
              </p>
            </div>
          </motion.div>
        )}

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#f59e0b]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-[#f59e0b]/20 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f59e0b] transition-colors">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{section.text}</p>
                </div>
              </div>
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
          <p className="text-gray-600 mb-6">Ready to experience the Etomidatesite difference?</p>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#ea7a17] text-black font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#f59e0b]/25"
          >
            Browse Our Collection
          </a>
        </motion.div>
      </div>
    </div>
  );
}

