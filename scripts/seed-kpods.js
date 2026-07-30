/**
 * Seed script for K-Pods Vape products
 * Run with: node scripts/seed-kpods.js
 *
 * Note: Make sure your MONGODB_URI environment variable is set
 */

require('dotenv').config({ path: '.env.local' });

const mongoose = require("mongoose");

// CAS Number
const CAS_ETOMIDATE = "33125-97-2";

// K-Pods vape products data
const kpodProducts = [
  {
    slug: "etomidate-vape-kpod-classic",
    name: "Etomidate Vape K-Pod Classic",
    price: 300,
    category: "vape",
    shortDescription: "The original K-Pod featuring our signature etomidate formulation in a sleek, portable design.",
    description: `The Classic K-Pod represents the foundation of our vape lineup. Each pod contains pharmaceutical-grade etomidate formulated specifically for vaporization, delivering consistent potency with every use.

Engineered with medical-grade materials and precision manufacturing, the Classic K-Pod offers reliable performance and exceptional purity. The compact design makes it perfect for discreet use while maintaining the highest standards of quality.

Compatible with all standard K-Pod devices. Each pod is individually sealed to preserve freshness and potency until ready for use.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Pre-filled vape cartridge (K-Pod)",
      "Compatibility: Universal K-Pod devices",
      "Capacity: 1.0ml per pod",
      "Material: Medical-grade stainless steel and glass",
      "Leak-resistant design",
      "Batch-coded for traceability",
    ],
    sizes: [
      { label: "50 Pods", price: 300 },
      { label: "100 Pods", price: 550 },
      { label: "200 Pods", price: 850 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-vape-kpod-strong",
    name: "Etomidate Vape K-Pod Strong",
    price: 300,
    category: "vape",
    shortDescription: "Enhanced potency K-Pod for experienced users seeking stronger effects.",
    description: `The Strong K-Pod delivers enhanced potency for those who require a more pronounced experience. Formulated with a higher concentration of pharmaceutical-grade etomidate while maintaining the same purity standards.

Each pod undergoes additional quality control testing to ensure consistent dosing and reliable performance. The advanced ceramic coil technology provides smooth vapor production without compromising the integrity of the active compounds.

Recommended for experienced users who are familiar with etomidate effects and require stronger therapeutic outcomes.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Enhanced pre-filled vape cartridge",
      "Potency: 2x concentration (Classic formula)",
      "Compatibility: Universal K-Pod devices",
      "Capacity: 1.0ml per pod",
      "Advanced ceramic coil technology",
      "Enhanced quality control testing",
    ],
    sizes: [
      { label: "50 Pods", price: 300 },
      { label: "100 Pods", price: 550 },
      { label: "200 Pods", price: 850 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-vape-disposable-mini",
    name: "Etomidate Vape Disposable Mini",
    price: 70,
    category: "vape",
    shortDescription: "Single-use disposable vape pen with pre-filled etomidate, perfect for travel and convenience.",
    description: `The Disposable Mini offers ultimate convenience in a ready-to-use format. No charging, no refilling, no maintenance — simply use and dispose responsibly when finished.

Each disposable unit contains the same pharmaceutical-grade etomidate as our K-Pods, sealed in a compact all-in-one device. The integrated battery is calibrated for optimal vaporization of our specific formulation.

Perfect for travel, sampling, or situations where carrying a separate device is impractical. The discreet form factor and silent operation make it ideal for on-the-go use.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Form: All-in-one disposable vape pen",
      "Battery: Integrated, pre-charged",
      "Capacity: 0.5ml per unit",
      "Draw-activated (no buttons)",
      "No charging required",
      "Tamper-evident packaging",
    ],
    sizes: [
      { label: "10 Units", price: 70 },
      { label: "25 Units", price: 160 },
      { label: "50 Units", price: 300 },
      { label: "100 Units", price: 550 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-vape-kpod-menthol",
    name: "Etomidate Vape K-Pod Menthol",
    price: 300,
    category: "vape",
    shortDescription: "Refreshing menthol-infused K-Pod with cooling sensation and smooth vapor.",
    description: `The Menthol K-Pod combines our pharmaceutical-grade etomidate with premium menthol crystals for a refreshing, cooling experience. The menthol is carefully sourced and purified to pharmaceutical standards.

The formulation is balanced to ensure the menthol enhances rather than masks the etomidate's properties. Each puff delivers a crisp, clean sensation with smooth vapor production thanks to our advanced wicking system.

Popular among users who prefer a cooling, minty experience. The menthol can also help soothe the throat during use.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Menthol: Pharmaceutical-grade, USP standard",
      "Form: Menthol-infused pre-filled cartridge",
      "Compatibility: Universal K-Pod devices",
      "Capacity: 1.0ml per pod",
      "Enhanced wicking system",
      "Cooling sensation profile",
    ],
    sizes: [
      { label: "50 Pods", price: 300 },
      { label: "100 Pods", price: 550 },
      { label: "200 Pods", price: 850 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-vape-starter-kit",
    name: "Etomidate Vape Starter Kit",
    price: 70,
    category: "vape",
    shortDescription: "Complete starter kit with premium device and sample K-Pods for new users.",
    description: `The Starter Kit is the perfect introduction to our etomidate vape products. Each kit includes a premium rechargeable device and a selection of our most popular K-Pod varieties.

The included device features variable voltage settings, allowing you to customize your experience from smooth and subtle to more pronounced effects. The long-lasting battery provides all-day use on a single charge, with USB-C fast charging.

Also includes a carrying case, cleaning accessories, and detailed usage instructions. Everything you need to begin your journey with confidence and convenience.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Device: Premium rechargeable vape mod",
      "Battery: 1000mAh lithium-ion",
      "Charging: USB-C fast charge",
      "Settings: 3 voltage levels",
      "Kit Contents: Device + 5 mixed K-Pods + Case + Accessories",
      "Warranty: 90-day device warranty",
    ],
    sizes: [
      { label: "1 Kit (with 5 Pods)", price: 400 },
      { label: "1 Kit (with 10 Pods)", price: 550 },
      { label: "1 Kit (with 25 Pods)", price: 900 },
      { label: "2 Kits (with 25 Pods each)", price: 1600 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-vape-kpod-max",
    name: "Etomidate Vape K-Pod Max",
    price: 300,
    category: "vape",
    shortDescription: "Maximum capacity K-Pod with extended usage and premium coil technology.",
    description: `The Max K-Pod is designed for users who demand extended usage between replacements. With 2.0ml capacity — double the standard size — each pod provides twice the usage time while maintaining portability.

Features our most advanced ceramic coil technology for optimal heat distribution and consistent vapor quality from first draw to last. The enlarged reservoir is made from upgraded borosilicate glass for superior chemical resistance.

Despite the larger capacity, the Max maintains compatibility with all standard K-Pod devices. The extended capacity means fewer replacements and better value for regular users.`,
    specifications: [
      `CAS Number: ${CAS_ETOMIDATE}`,
      "Purity: ≥99.8% (HPLC verified)",
      "Form: High-capacity pre-filled cartridge",
      "Capacity: 2.0ml per pod (2x standard)",
      "Compatibility: Universal K-Pod devices",
      "Coil: Advanced ceramic heating element",
      "Reservoir: Upgraded borosilicate glass",
      "Optimized for extended usage cycles",
    ],
    sizes: [
      { label: "50 Pods", price: 300 },
      { label: "100 Pods", price: 550 },
      { label: "200 Pods", price: 850 },
    ],
    inStock: true,
    image: "",
  },
];

async function seedKpods() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI || MONGODB_URI.includes("username:password")) {
      console.error("Error: MONGODB_URI environment variable is not set or contains placeholder");
      console.log("Please set your MongoDB connection string:");
      console.log("  Windows: set MONGODB_URI=your_connection_string");
      console.log("  Mac/Linux: export MONGODB_URI=your_connection_string");
      process.exit(1);
    }

    await mongoose.connect(MONGODB_URI);
    console.log("✓ Connected to MongoDB");

    // Define Product Schema (same as in the app)
    const SizeSchema = new mongoose.Schema(
      {
        label: { type: String, required: true },
        price: { type: Number, required: true },
      },
      { _id: false }
    );

    const ProductSchema = new mongoose.Schema(
      {
        slug: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, enum: ["powder", "vape", "liquid", "flavours"], required: true },
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

    // Insert or update products
    let inserted = 0;
    let updated = 0;

    for (const productData of kpodProducts) {
      const existing = await Product.findOne({ slug: productData.slug });
      
      if (existing) {
        await Product.updateOne({ slug: productData.slug }, productData);
        console.log(`✓ Updated: ${productData.name}`);
        updated++;
      } else {
        await Product.create(productData);
        console.log(`✓ Created: ${productData.name}`);
        inserted++;
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log("Seeding complete!");
    console.log(`  Inserted: ${inserted} products`);
    console.log(`  Updated: ${updated} products`);
    console.log(`  Total: ${kpodProducts.length} K-Pod products`);
    console.log("=".repeat(50));

    await mongoose.disconnect();
    console.log("✓ Disconnected from MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error.message);
    process.exit(1);
  }
}

// Run the seed function
seedKpods();

