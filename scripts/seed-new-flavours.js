/**
 * Seed script for new Vape Flavours products
 * Run with: node scripts/seed-new-flavours.js
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
  { label: "500ml", price: 270 },
  { label: "1000ml", price: 480 },
];

function makeFlavour(name, slug, image, flavorDesc) {
  return {
    slug,
    name: `${name} Flavour`,
    price: 270,
    category: "vape flavours",
    shortDescription: `${flavorDesc} A smooth, well-balanced vape flavour crafted for consistent taste in every batch.`,
    description: `Our ${name} flavour delivers a rich, authentic taste experience crafted through careful flavor formulation and quality ingredient sourcing. ${flavorDesc}

Each batch is produced under strict quality control to ensure consistent flavor intensity, aroma, and smoothness across every bottle. The formulation is designed to blend seamlessly with your preferred base, delivering reliable results with every use.

Bottled in tamper-evident, light-protected containers to preserve freshness and flavor integrity during storage and transport. Every batch is quality-tested before release and coded for full traceability.`,
    specifications: [
      "Form: Liquid flavour concentrate",
      "Packaging: Tamper-evident, light-protected bottle",
      "Storage: Cool, dry place away from direct light",
      "Batch-coded for traceability",
      "Quality-tested for consistent flavor and aroma",
    ],
    sizes: standardSizes,
    inStock: true,
    image,
  };
}

const newProducts = [
  makeFlavour("Raspberry", "raspberry-flavour", "/uploads/BlueberrySourRaspberryNicSaltE-LiquidbyBarJuice.webp", "A bold, tangy raspberry profile with a naturally sweet finish."),
  makeFlavour("Blueberry", "blueberry-flavour", "/uploads/BlueberryE-LiquidbyVSFiftyFifty.webp", "A juicy, rich blueberry taste balanced with a smooth, mellow sweetness."),
  makeFlavour("Honeydew", "honeydew-flavour", "/uploads/HoneydewBlackurrantIce100mlShortfillE-LiquidbyYetiSummit.webp", "A refreshing, subtly sweet honeydew melon flavour with a crisp, cool finish."),
  makeFlavour("Strawberry Mango", "strawberry-mango-flavour", "/uploads/BlueberryRaspberryProMaxPrefilledPod_RefillbyHayati.webp", "A vibrant fusion of ripe strawberries and tropical mango for a fruity, well-rounded taste."),
  makeFlavour("Coke", "coke-flavour", "/uploads/cola-nic-salt-e-liquid-by-elux-legend_4.jpg", "A classic, fizzy cola-inspired flavour with a crisp, nostalgic taste."),
  makeFlavour("Green Apple", "green-apple-flavour", "/uploads/SourGreenAppleNicSaltE-LiquidbyIVGIntenseSalts.webp", "A crisp, tart green apple flavour with a refreshingly sour edge."),
  makeFlavour("Thai Mango", "thai-mango-flavour", "/uploads/TripleMangoNicSaltbyBarJuice5000.webp", "A rich, tropical mango flavour inspired by authentic Thai mango sweetness."),
  makeFlavour("Grape", "grape-flavour", "/uploads/Grape-Nic-Salt-E-Liquid-by-Bar-Juice.webp", "A deep, naturally sweet grape flavour with a smooth, satisfying finish."),
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

    console.log(`\nDone! ${newProducts.length} vape flavour products seeded.`);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
