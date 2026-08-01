/**
 * Seed script for new Vape / K-Pod products
 * Run with: node scripts/seed-new-vapes.js
 */

require('dotenv').config({ path: '.env.local' });
const mongoose = require("mongoose");

const SizeSchema = new mongoose.Schema(
  { label: { type: String, required: true }, price: { type: Number, required: true } },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: ["powder", "vape", "liquid", "vape flavours"], required: true },
    shortDescription: { type: String, default: "" },
    description: { type: String, default: "" },
    specifications: [{ type: String }],
    sizes: [SizeSchema],
    inStock: { type: Boolean, default: true },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

const standardSizes = [
  { label: "50 Pods", price: 300 },
  { label: "100 Pods", price: 450 },
  { label: "200 Pods", price: 750 },
];

const CAS_ETOMIDATE = "33125-97-2";

const newProducts = [
  {
    slug: "ketamine-pods",
    name: "Ketamine Pods",
    price: 300,
    category: "vape",
    shortDescription: "Pre-filled ketamine vape pods with consistent dosing and pharmaceutical-grade formulation.",
    description: `Ketamine Pods deliver a precisely formulated dissociative compound in a convenient, pre-filled vape cartridge. Each pod is manufactured under strict quality control to ensure consistent concentration and reliable performance with every use.

These pods are designed for compatibility with standard vape devices and feature medical-grade construction to prevent leaks and maintain product integrity. The formulation undergoes rigorous laboratory testing to verify potency and purity before packaging.

Each batch is individually sealed and batch-coded for full traceability. Ideal for researchers and users requiring a discreet, portable delivery format.`,
    specifications: [
      "Form: Pre-filled vape cartridge",
      "Compatibility: Universal pod devices",
      "Capacity: 1.0ml per pod",
      "Material: Medical-grade stainless steel and glass",
      "Leak-resistant design",
      "Batch-coded for traceability",
      "Lab-tested for consistency",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/kpods1.jpeg",
  },
  {
    slug: "space-oil",
    name: "Space Oil",
    price: 300,
    category: "vape",
    shortDescription: "Premium Space Oil vape formulation known for its smooth vapor production and consistent effects.",
    description: `Space Oil is a premium vape formulation crafted for smooth, consistent vapor production. Each pod is carefully filled with a proprietary blend designed to deliver a reliable experience with every draw.

Manufactured using medical-grade components and subjected to comprehensive quality control, Space Oil pods maintain their potency and flavor profile throughout their shelf life. The advanced coil technology ensures even heating and prevents burnt or inconsistent hits.

Packaged in tamper-evident, leak-resistant cartridges compatible with standard vape devices. Every batch is tested for purity and consistency before shipping.`,
    specifications: [
      "Form: Pre-filled vape cartridge",
      "Compatibility: Universal pod devices",
      "Capacity: 1.0ml per pod",
      "Material: Medical-grade stainless steel and glass",
      "Leak-resistant, tamper-evident design",
      "Batch-coded for traceability",
      "Lab-tested for consistency",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/space oil.jpeg",
  },
  {
    slug: "zombie-vapes",
    name: "Zombie Vapes",
    price: 300,
    category: "vape",
    shortDescription: "High-potency Zombie Vape pods formulated for a strong, long-lasting experience.",
    description: `Zombie Vapes are formulated for users seeking a more intense, long-lasting vaping experience. Each pod contains a carefully balanced concentration designed to deliver strong, consistent effects with every session.

Built with the same medical-grade materials and manufacturing precision as our full product line, Zombie Vape pods undergo multiple rounds of quality testing to confirm potency and purity before release.

Compatible with standard vape devices and shipped in discreet, tamper-evident packaging. Each batch is coded for full traceability and quality assurance.`,
    specifications: [
      "Form: Pre-filled vape cartridge",
      "Compatibility: Universal pod devices",
      "Capacity: 1.0ml per pod",
      "Material: Medical-grade stainless steel and glass",
      "Enhanced potency formulation",
      "Batch-coded for traceability",
      "Lab-tested for consistency",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/zombie vape.jpeg",
  },
  {
    slug: "eto-vapes",
    name: "Eto Vapes",
    price: 300,
    category: "vape",
    shortDescription: "Signature Eto Vape pods featuring pharmaceutical-grade etomidate for reliable, consistent use.",
    description: `Eto Vapes are our signature etomidate-based vape pods, formulated with pharmaceutical-grade material to deliver reliable and consistent performance. Each pod is precision-filled to maintain accurate dosing across every unit.

Manufactured under strict quality control protocols, Eto Vapes undergo HPLC verification to confirm purity and concentration. The ceramic coil design ensures smooth vapor production without compromising the integrity of the active compound.

Compatible with universal pod devices and individually sealed for freshness. Every batch includes full traceability documentation.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Pre-filled vape cartridge",
      "Compatibility: Universal pod devices",
      "Capacity: 1.0ml per pod",
      "Material: Medical-grade stainless steel and glass",
      "Batch-coded for traceability",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/Etomidate-Vape-Pod-2.jpg",
  },
  {
    slug: "e-cigarettes",
    name: "E-Cigarettes",
    price: 300,
    category: "vape",
    shortDescription: "Pre-filled e-cigarette devices offering a convenient, ready-to-use vaping option.",
    description: `Our E-Cigarettes offer a convenient, all-in-one vaping solution for users who prefer a ready-to-use device. Each unit comes pre-filled and pre-charged, requiring no assembly or refilling.

Manufactured with medical-grade materials and subjected to rigorous quality control, our e-cigarettes deliver consistent vapor production and reliable performance throughout their lifespan. The compact, discreet design makes them ideal for on-the-go use.

Each device is individually packaged and batch-coded for quality assurance and traceability.`,
    specifications: [
      "Form: Disposable pre-filled device",
      "Ready to use, no assembly required",
      "Capacity: 1.0ml e-liquid",
      "Material: Medical-grade components",
      "Built-in battery, single-use design",
      "Batch-coded for traceability",
      "Lab-tested for consistency",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/kpods3.jpeg",
  },
  {
    slug: "zombie-cigarettes",
    name: "Zombie Cigarettes",
    price: 300,
    category: "vape",
    shortDescription: "High-potency disposable Zombie Cigarette devices for a strong, ready-to-use experience.",
    description: `Zombie Cigarettes combine the convenience of a disposable device with a high-potency formulation for users seeking a stronger experience. Each unit is pre-filled and ready to use straight out of the package.

Built with reliable medical-grade components, these devices undergo comprehensive quality testing to verify consistent potency across every unit. The compact form factor allows for discreet, on-the-go use without sacrificing performance.

Each device is individually sealed and batch-coded for full traceability and quality assurance.`,
    specifications: [
      "Form: Disposable pre-filled device",
      "Ready to use, no assembly required",
      "Capacity: 1.0ml e-liquid",
      "Enhanced potency formulation",
      "Built-in battery, single-use design",
      "Batch-coded for traceability",
      "Lab-tested for consistency",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/kpods5.jpeg",
  },
  {
    slug: "space-vapes",
    name: "Space Vapes",
    price: 300,
    category: "vape",
    shortDescription: "Space Vapes deliver a smooth, consistent vaping experience in a sleek, portable pod design.",
    description: `Space Vapes offer a smooth and consistent vaping experience packaged in a sleek, portable pod device. Formulated for reliable performance, each pod delivers an even concentration with every draw.

Manufactured under strict quality control standards, Space Vapes are tested for purity and consistency before packaging. The advanced coil design ensures smooth vapor output and prevents burnt or uneven hits.

Compatible with standard pod devices and shipped in discreet, tamper-evident packaging with full batch traceability.`,
    specifications: [
      "Form: Pre-filled vape cartridge",
      "Compatibility: Universal pod devices",
      "Capacity: 1.0ml per pod",
      "Material: Medical-grade stainless steel and glass",
      "Leak-resistant, tamper-evident design",
      "Batch-coded for traceability",
      "Lab-tested for consistency",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/kpods7.jpeg",
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    for (const product of newProducts) {
      const existing = await Product.findOne({ slug: product.slug });
      if (existing) {
        console.log(`  Updating: ${product.name}`);
        await Product.updateOne({ slug: product.slug }, { $set: product });
      } else {
        console.log(`  Creating: ${product.name}`);
        await Product.create(product);
      }
    }

    console.log(`\nDone! ${newProducts.length} vape/k-pod products seeded.`);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
