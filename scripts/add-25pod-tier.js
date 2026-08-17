/**
 * Adds a "25 Pods" — €160 minimum size tier to all vape/K-Pods products.
 * Skips products that already have a "25 Pods" size.
 * Run with: node scripts/add-25pod-tier.js
 */

require("dotenv").config({ path: ".env.local" });
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
    category: { type: String, enum: ["powder", "vape", "liquid", "vape flavours", "flavours"], required: true },
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

const NEW_TIER = { label: "25 Pods", price: 160 };

async function run() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI || MONGODB_URI.includes("username:password")) {
    console.error("Error: MONGODB_URI environment variable is not set or contains placeholder");
    process.exit(1);
  }

  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  const vapeProducts = await Product.find({ category: "vape" });
  console.log(`Found ${vapeProducts.length} vape products`);

  let updated = 0;
  let skipped = 0;

  for (const product of vapeProducts) {
    const hasTier = product.sizes.some((s) => s.label.trim().toLowerCase() === "25 pods");
    if (hasTier) {
      console.log(`  Skipped (already has 25 Pods): ${product.name}`);
      skipped++;
      continue;
    }
    product.sizes.unshift(NEW_TIER);
    await product.save();
    console.log(`  Updated: ${product.name} -> sizes: ${product.sizes.map((s) => s.label).join(", ")}`);
    updated++;
  }

  console.log("\n" + "=".repeat(50));
  console.log(`Done. Updated: ${updated}, Skipped: ${skipped}, Total: ${vapeProducts.length}`);
  console.log("=".repeat(50));

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
