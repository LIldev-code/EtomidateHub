"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheckCircle, FiFileText, FiSearch, FiLayers, FiThermometer, FiDroplet } from "react-icons/fi";
import { HiOutlineBeaker, HiOutlineDocumentText, HiOutlineShieldCheck } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const testingStages = [
  {
    icon: <HiOutlineBeaker className="w-5 h-5" />,
    title: "HPLC Purity Analysis",
    text: "High-Performance Liquid Chromatography quantifies the active compound and separates it from impurities. Each batch is run against a reference standard and must meet the ≥99.8% purity threshold before release.",
  },
  {
    icon: <FiSearch className="w-5 h-5" />,
    title: "GC-MS Impurity Screening",
    text: "Gas Chromatography–Mass Spectrometry screens for volatile impurities, residual solvents, and unexpected by-products, confirming the impurity profile matches the accepted specification.",
  },
  {
    icon: <FiLayers className="w-5 h-5" />,
    title: "NMR Identity Confirmation",
    text: "Nuclear Magnetic Resonance spectroscopy confirms the molecular structure of the compound, verifying that the identity is correct and consistent with the reference spectrum.",
  },
  {
    icon: <FiDroplet className="w-5 h-5" />,
    title: "Moisture & Residual Solvent",
    text: "Karl Fischer titration and headspace analysis measure water content and residual solvents, both of which must fall within the batch specification.",
  },
  {
    icon: <FiThermometer className="w-5 h-5" />,
    title: "Physical Characterisation",
    text: "Appearance, melting point, and solubility are checked against the monograph to catch any physical deviation not visible through chromatography alone.",
  },
  {
    icon: <HiOutlineDocumentText className="w-5 h-5" />,
    title: "Documentation & Release",
    text: "Results are compiled into the batch Certificate of Analysis, reviewed by quality control, and signed off before the batch is released.",
  },
];

const coaFields = [
  { label: "Product name & CAS number", desc: "Identifies the compound tested (e.g. CAS 33125-97-2)." },
  { label: "Batch / lot number", desc: "Unique identifier linking the document to a specific production run." },
  { label: "Date of analysis", desc: "When the tests were performed; results reflect the batch at that date." },
  { label: "Test method", desc: "The analytical technique used for each parameter (HPLC, GC-MS, NMR, KF)." },
  { label: "Specification", desc: "The acceptance limit for each parameter (e.g. purity ≥ 99.8%)." },
  { label: "Result", desc: "The measured value for the batch, compared directly against the specification." },
  { label: "Chromatogram / spectrum", desc: "The raw HPLC trace or NMR spectrum supporting the reported result." },
  { label: "Analyst & QC sign-off", desc: "Names or initials of the analyst and the reviewer who approved release." },
];

const verificationSteps = [
  "Match the batch number printed on the label to the batch number on the COA.",
  "Confirm the CAS number and product name correspond to the compound described.",
  "Check that every reported result falls within its stated specification.",
  "Review the HPLC chromatogram: a single dominant peak with minimal secondary peaks indicates high purity.",
  "Compare the retention time on the chromatogram with the reference standard listed on the document.",
  "If independent testing is performed, compare in-house HPLC results with the COA figures.",
];

const glossary = [
  { term: "COA", def: "Certificate of Analysis — a document reporting the results of laboratory tests performed on a specific batch." },
  { term: "HPLC", def: "High-Performance Liquid Chromatography — a technique that separates, identifies and quantifies components in a sample." },
  { term: "GC-MS", def: "Gas Chromatography–Mass Spectrometry — used to detect volatile impurities and residual solvents." },
  { term: "NMR", def: "Nuclear Magnetic Resonance spectroscopy — confirms molecular structure and identity." },
  { term: "Retention time", def: "The time a compound takes to pass through the HPLC column; used to identify the peak." },
  { term: "Reference standard", def: "A highly characterised sample of known purity used as the comparison point for all tests." },
  { term: "Specification", def: "The predefined acceptance criteria a batch must meet to be released." },
  { term: "Lot / batch number", def: "A unique code that ties a product unit to its production run and test records." },
];

export default function LabVerificationClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "COA & HPLC Documentation — Laboratory Verification",
    description:
      "How every batch is verified: HPLC purity analysis, Certificate of Analysis documentation, GC-MS and NMR identity confirmation.",
    url: "https://etomidatehub.com/lab-verification",
    publisher: {
      "@type": "Organization",
      name: "Etomidatehub.com",
      url: "https://etomidatehub.com",
    },
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative bg-[#00246B] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/uploads/clinical-laboratory.webp" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#00246B]/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#CADCFC] text-sm font-semibold uppercase tracking-widest mb-4">
              Laboratory Verification
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              COA &amp; HPLC Documentation
            </h1>
            <p className="text-[#CADCFC]/90 text-lg max-w-2xl mx-auto leading-relaxed">
              A detailed guide to how each batch is analysed, how the Certificate of Analysis is
              compiled, and how to read and cross-check the documentation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key figures */}
      <div className="relative -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              { value: "≥99.8%", label: "Purity Specification" },
              { value: "HPLC", label: "Primary Assay" },
              { value: "3", label: "Identity Methods" },
              { value: "100%", label: "Batches Documented" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg shadow-[#00246B]/5 border border-[#CADCFC]/30 p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#00246B]">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* What is a COA */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-72 md:h-80 rounded-2xl overflow-hidden"
          >
            <Image src="/uploads/lab.webp" alt="Analytical laboratory" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00246B]/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What a Certificate of Analysis Is
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Certificate of Analysis (COA) is a batch-specific document issued by the testing
              laboratory. It lists each parameter tested, the method used, the acceptance
              specification, and the measured result. It is the primary record demonstrating that a
              given batch meets its quality specification.
            </p>
            <ul className="space-y-3">
              {[
                "Issued per batch, never per product line",
                "Reports measured results against fixed specifications",
                "Includes the supporting HPLC chromatogram",
                "Signed off by quality control before release",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <FiCheckCircle className="w-4 h-4 text-[#00246B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Testing stages */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Verification Process</h2>
          <p className="text-gray-500 mt-2">Six stages every batch passes before a COA is issued</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {testingStages.map((stage, i) => (
            <motion.div
              key={stage.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group bg-[#f8faff] rounded-xl p-6 hover:bg-white hover:shadow-lg hover:shadow-[#CADCFC]/20 border border-transparent hover:border-[#CADCFC]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00246B] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {stage.icon}
                </div>
                <span className="text-xs font-bold text-[#00246B]/60">STEP {i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{stage.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{stage.text}</p>
            </motion.div>
          ))}
        </div>

        {/* HPLC explainer */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How HPLC Purity Is Determined
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The sample is dissolved and injected into a column under high pressure. Each component
              travels through the column at a different rate and exits at a characteristic retention
              time, producing a peak on the chromatogram.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Purity is calculated from the area of the main peak relative to the total area of all
              peaks. A result of 99.8% means the target compound accounts for 99.8% of the detected
              material, with the remaining 0.2% attributed to identified impurities.
            </p>
            <ul className="space-y-3">
              {[
                "Run against a certified reference standard",
                "Retention time confirms identity of the main peak",
                "Area percentage gives the purity figure",
                "Chromatogram is attached to the COA",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <FiCheckCircle className="w-4 h-4 text-[#00246B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-72 md:h-80 rounded-2xl overflow-hidden"
          >
            <Image src="/uploads/hub2.jpeg" alt="HPLC instrumentation" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00246B]/30 to-transparent" />
          </motion.div>
        </div>

        {/* Reading a COA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reading a Certificate of Analysis</h2>
          <p className="text-gray-500 mt-2">The fields you will find on every document</p>
        </motion.div>

        <div className="bg-[#f8faff] border border-[#CADCFC]/30 rounded-2xl overflow-hidden mb-20">
          <div className="divide-y divide-[#CADCFC]/30">
            {coaFields.map((field, i) => (
              <motion.div
                key={field.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="grid sm:grid-cols-3 gap-2 sm:gap-6 px-6 py-4"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                  <FiFileText className="w-4 h-4 text-[#00246B] shrink-0" />
                  {field.label}
                </div>
                <p className="sm:col-span-2 text-sm text-gray-600">{field.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cross-checking */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-[#00246B] rounded-xl flex items-center justify-center text-white mb-5">
              <HiOutlineShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cross-Checking Your Documentation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A COA is only meaningful when it can be tied back to the physical batch in hand. These
              checks confirm the document corresponds to the material and that the reported values
              are internally consistent.
            </p>
          </motion.div>

          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {verificationSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#CADCFC]/40 text-[#00246B] text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </motion.ol>
        </div>

        {/* Glossary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Terminology</h2>
          <p className="text-gray-500 mt-2">Key terms used across laboratory documentation</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {glossary.map((g, i) => (
            <motion.div
              key={g.term}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="bg-white border border-[#CADCFC]/30 rounded-xl p-5"
            >
              <dt className="text-sm font-bold text-[#00246B] mb-1">{g.term}</dt>
              <dd className="text-sm text-gray-600 leading-relaxed">{g.def}</dd>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#00246B] rounded-2xl p-10 md:p-12 text-center"
        >
          <div className="w-12 h-12 mx-auto bg-white/10 rounded-xl flex items-center justify-center text-[#CADCFC] mb-5">
            <BsShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Documentation Requests</h3>
          <p className="text-[#CADCFC]/80 max-w-lg mx-auto leading-relaxed">
            Batch-specific COAs and supporting chromatograms can be requested by quoting the lot
            number printed on the product label. Contact{" "}
            <a href="mailto:purchase@etomidatehub.com" className="text-white underline underline-offset-2">
              purchase@etomidatehub.com
            </a>{" "}
            for documentation enquiries.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
