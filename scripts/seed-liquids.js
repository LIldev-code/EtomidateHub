require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const SizeSchema = new mongoose.Schema({ label: String, price: Number });
const ProductSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  name: String,
  price: Number,
  category: String,
  shortDescription: String,
  description: String,
  specifications: [String],
  sizes: [SizeSchema],
  inStock: { type: Boolean, default: true },
  image: { type: String, default: "" },
});
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

const liquidProducts = [
  {
    slug: "etomidate-space-oil",
    name: "Space Oil",
    price: 500,
    category: "liquid",
    shortDescription:
      "Pure pharmaceutical-grade etomidate liquid solution. Smooth, clean, and precisely dosed.",
    description: `Space Oil is our flagship liquid etomidate solution, carefully formulated for consistent potency and maximum purity. Each batch is synthesised from pharmaceutical-grade etomidate (CAS 33125-97-2) and prepared in our ISO-certified facility to a verified concentration, ensuring you receive exactly what you order every time.

The refined carrier base preserves the integrity of the active compound over extended storage periods. It is designed for researchers and professionals who require a reliable, repeatable liquid etomidate source without compromise.

Every bottle is individually batch-coded, hermetically sealed, and accompanied by a full Certificate of Analysis (COA) confirming ≥99.8% purity via HPLC testing. Discreet, secure worldwide shipping with delivery within 24–48 hours of dispatch.

Available in 100ml, 250ml, 500ml, and 1000ml volumes to suit both sample testing and large-scale research requirements.`,
    specifications: [
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Pharmaceutical-grade liquid solution",
      "Concentration: Precisely measured per batch",
      "Carrier: Pharmaceutical-grade solvent base",
      "Packaging: Hermetically sealed amber glass bottle",
      "COA included with every order",
      "Batch-coded for full traceability",
      "Storage: Keep in a cool, dark place",
    ],
    sizes: [
      { label: "100ml", price: 500 },
      { label: "250ml", price: 1250 },
      { label: "500ml", price: 2500 },
      { label: "1000ml", price: 5000 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-pg-solution",
    name: "Etomidate PG Solution",
    price: 500,
    category: "liquid",
    shortDescription:
      "Pharmaceutical-grade etomidate formulated in propylene glycol for stable, predictable research use.",
    description: `Etomidate PG Solution combines pharmaceutical-grade etomidate (CAS 33125-97-2) with high-purity propylene glycol to create a stable, homogeneous liquid formulation ideal for controlled research applications.

Propylene glycol is widely recognised as a safe, effective carrier for pharmaceutical compounds, providing excellent solubility and long-term stability. This solution is prepared under strict aseptic conditions in our ISO-certified facility, with every batch verified for purity, concentration, and sterility.

Each bottle is hermetically sealed in amber glass to protect against light degradation and supplied with a Certificate of Analysis confirming ≥99.8% etomidate purity. Discreet worldwide shipping within 24–48 hours.

Available in 100ml, 250ml, 500ml, and 1000ml volumes.`,
    specifications: [
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Etomidate in propylene glycol solution",
      "Carrier: Pharmaceutical-grade propylene glycol",
      "Concentration: Precisely measured per batch",
      "Packaging: Amber glass, tamper-evident seal",
      "COA included with every order",
      "Batch-coded for full traceability",
      "Storage: Keep in a cool, dark place",
    ],
    sizes: [
      { label: "100ml", price: 500 },
      { label: "250ml", price: 1250 },
      { label: "500ml", price: 2500 },
      { label: "1000ml", price: 5000 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-lipid-emulsion",
    name: "Etomidate Lipid Emulsion",
    price: 500,
    category: "liquid",
    shortDescription:
      "Premium etomidate lipid emulsion formulated for enhanced stability and bioavailability.",
    description: `Etomidate Lipid Emulsion is an advanced liquid formulation that suspends pharmaceutical-grade etomidate (CAS 33125-97-2) within a premium lipid carrier. The emulsion structure protects the active compound and supports consistent dispersion across a range of research settings.

Manufactured under rigorous aseptic conditions, each batch is tested for particle size distribution, stability, and etomidate potency to ensure reproducible results. The lipid base is composed of pharmaceutical-grade components selected for purity and compatibility.

Supplied in light-protective amber glass with hermetic sealing and a full Certificate of Analysis. Discreet worldwide shipping within 24–48 hours.

Available in 100ml, 250ml, 500ml, and 1000ml volumes.`,
    specifications: [
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Etomidate lipid emulsion",
      "Carrier: Pharmaceutical-grade lipid base",
      "Emulsion particle size: controlled and verified",
      "Packaging: Amber glass, tamper-evident seal",
      "COA included with every order",
      "Batch-coded for full traceability",
      "Storage: Keep refrigerated; protect from light",
    ],
    sizes: [
      { label: "100ml", price: 500 },
      { label: "250ml", price: 1250 },
      { label: "500ml", price: 2500 },
      { label: "1000ml", price: 5000 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-oral-solution",
    name: "Etomidate Oral Solution",
    price: 500,
    category: "liquid",
    shortDescription:
      "Ready-to-use etomidate oral solution with optimised taste and consistent dosing.",
    description: `Etomidate Oral Solution provides a precisely formulated, ready-to-use liquid etomidate product based on pharmaceutical-grade etomidate (CAS 33125-97-2). The formulation is designed for consistent dosing and improved palatability in research environments.

Prepared in our ISO-certified facility, every batch is tested for identity, purity, concentration, and microbial limits. The solution is dispensed in amber glass bottles with child-resistant closures and tamper-evident seals to maintain integrity from production to use.

Each order includes a Certificate of Analysis confirming ≥99.8% etomidate purity. Discreet worldwide shipping within 24–48 hours.

Available in 100ml, 250ml, 500ml, and 1000ml volumes.`,
    specifications: [
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Ready-to-use oral solution",
      "Concentration: Precisely measured per batch",
      "Flavour profile: Optimised for research use",
      "Packaging: Amber glass, child-resistant closure",
      "COA included with every order",
      "Batch-coded for full traceability",
      "Storage: Keep in a cool, dark place",
    ],
    sizes: [
      { label: "100ml", price: 500 },
      { label: "250ml", price: 1250 },
      { label: "500ml", price: 2500 },
      { label: "1000ml", price: 5000 },
    ],
    inStock: true,
    image: "",
  },
];

async function seedLiquids() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    for (const product of liquidProducts) {
      const existing = await Product.findOne({ slug: product.slug });
      if (existing) {
        await Product.updateOne({ slug: product.slug }, { $set: product });
        console.log(`Updated: ${product.name}`);
      } else {
        await Product.create(product);
        console.log(`Created: ${product.name}`);
      }
    }

    // Remove any other liquid products so the catalog matches this list
    const keepSlugs = liquidProducts.map((p) => p.slug);
    const removed = await Product.deleteMany({
      category: "liquid",
      slug: { $nin: keepSlugs },
    });
    if (removed.deletedCount > 0) {
      console.log(`Removed ${removed.deletedCount} outdated liquid product(s)`);
    }

    console.log("\nDone — Liquid products seeded:");
    console.log("  100ml  = €500");
    console.log("  250ml  = €1,250");
    console.log("  500ml  = €2,500");
    console.log("  1000ml = €5,000");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedLiquids();
