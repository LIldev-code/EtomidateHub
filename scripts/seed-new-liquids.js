/**
 * Seed script for new Liquid products
 * Run with: node scripts/seed-new-liquids.js
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
  { label: "100ml", price: 500 },
  { label: "250ml", price: 1250 },
  { label: "500ml", price: 2500 },
  { label: "1000ml", price: 5000 },
];

const newProducts = [
  {
    slug: "space-oil-liquid",
    name: "Space Oil",
    price: 500,
    category: "liquid",
    shortDescription: "Premium Space Oil liquid formulation offering smooth consistency and reliable concentration.",
    description: `Space Oil Liquid is a premium formulation crafted for researchers and users who prefer a liquid delivery format. Each batch is carefully blended to ensure a smooth, consistent texture with reliable concentration throughout.

Manufactured under strict quality control standards, Space Oil Liquid undergoes comprehensive laboratory testing to verify purity and potency. The liquid is bottled in tamper-evident, light-protected containers to preserve stability and prevent degradation during storage and transport.

Suitable for a range of applications requiring precise liquid dosing. Every bottle is batch-coded for full traceability and quality assurance.`,
    specifications: [
      "Form: Liquid solution",
      "Packaging: Tamper-evident, light-protected bottle",
      "Storage: Cool, dry place away from direct light",
      "Batch-coded for traceability",
      "Lab-tested for consistency and purity",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/_5081_Etomidate--Obat-Keras-yang-Mematikan-Jika-Dijadikan-Liquid-Vape.jpg",
  },
  {
    slug: "zombie-juice",
    name: "Zombie Juice",
    price: 500,
    category: "liquid",
    shortDescription: "High-potency Zombie Juice liquid formulated for a strong, long-lasting experience.",
    description: `Zombie Juice is a high-potency liquid formulation designed for those seeking a stronger, longer-lasting experience. Each batch is precisely blended to maintain a consistent concentration across every bottle.

Produced using pharmaceutical-grade components and subjected to rigorous quality control, Zombie Juice is tested for purity and potency before bottling. The liquid is packaged in tamper-evident, light-resistant containers to preserve its integrity throughout storage and shipping.

Ideal for research applications and users who require a stronger liquid formulation. Every bottle is batch-coded for full traceability.`,
    specifications: [
      "Form: Liquid solution",
      "Enhanced potency formulation",
      "Packaging: Tamper-evident, light-protected bottle",
      "Storage: Cool, dry place away from direct light",
      "Batch-coded for traceability",
      "Lab-tested for consistency and purity",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/cola-nic-salt-e-liquid-by-elux-legend_4.jpg",
  },
  {
    slug: "liquid-ketamine",
    name: "Liquid Ketamine",
    price: 500,
    category: "liquid",
    shortDescription: "Pharmaceutical-grade liquid ketamine formulation with verified purity and consistent concentration.",
    description: `Liquid Ketamine is a pharmaceutical-grade dissociative compound formulated in liquid form for precise dosing and research applications. Each batch undergoes thorough analytical testing to confirm concentration accuracy and purity.

Manufactured under strict quality control protocols, our liquid ketamine is verified through HPLC analysis and packaged in tamper-evident, light-resistant bottles to maintain stability during storage and transport.

Suitable for laboratories and research facilities requiring a reliable liquid formulation. Every bottle includes batch-specific documentation for full traceability.`,
    specifications: [
      "Form: Liquid solution",
      "Purity: ≥99% (HPLC verified)",
      "Packaging: Tamper-evident, light-protected bottle",
      "Storage: Cool, dry place away from direct light",
      "Batch-coded for traceability",
      "Certificate of Analysis included",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/HoneydewBlackurrantIce100mlShortfillE-LiquidbyYetiSummit.webp",
  },
  {
    slug: "eto-juice",
    name: "Eto Juice",
    price: 500,
    category: "liquid",
    shortDescription: "Signature Eto Juice liquid featuring pharmaceutical-grade etomidate for reliable, consistent use.",
    description: `Eto Juice is our signature etomidate-based liquid formulation, crafted with pharmaceutical-grade material to deliver consistent concentration and reliable performance. Each batch is precisely blended to ensure accurate dosing across every bottle.

Manufactured under strict quality control standards, Eto Juice undergoes HPLC verification to confirm purity and concentration levels. The liquid is bottled in tamper-evident, light-protected containers to preserve stability throughout storage and transport.

Ideal for research applications requiring a dependable liquid formulation. Every bottle is batch-coded with full traceability documentation included.`,
    specifications: [
      "CAS Number: 33125-97-2",
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Liquid solution",
      "Packaging: Tamper-evident, light-protected bottle",
      "Storage: Cool, dry place away from direct light",
      "Batch-coded for traceability",
      "Certificate of Analysis included",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/SourGreenAppleNicSaltE-LiquidbyIVGIntenseSalts.webp",
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

    console.log(`\nDone! ${newProducts.length} liquid products seeded.`);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
