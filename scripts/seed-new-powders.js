/**
 * Seed script for new Powder products
 * Run with: node scripts/seed-new-powders.js
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
  { label: "50g", price: 800 },
  { label: "100g", price: 1400 },
  { label: "200g", price: 2400 },
  { label: "500g", price: 5000 },
  { label: "1kg", price: 8500 },
];

const newProducts = [
  {
    slug: "etomidate-powder",
    name: "Etomidate Powder",
    price: 800,
    category: "powder",
    shortDescription: "High-purity etomidate powder (CAS 33125-97-2) for research applications. HPLC verified ≥99.8% purity with full COA documentation.",
    description: `Premium pharmaceutical-grade etomidate powder, one of the most significant intravenous anesthetic agents in modern pharmacology. Chemically known as ethyl 1-(1-phenylethyl)-1H-imidazole-5-carboxylate, this compound is widely used in pharmacological research, GABA-A receptor studies, and anesthesia mechanism investigations.

Our etomidate powder is sourced from GMP-certified manufacturers and undergoes rigorous multi-stage quality control including HPLC purity verification, NMR structural confirmation, and GC-MS contaminant screening. Every batch ships with a comprehensive Certificate of Analysis.

The fine crystalline powder is vacuum-sealed under inert atmosphere and packaged in light-protected containers to maintain maximum potency and stability. Ideal for academic research, pharmaceutical formulation development, and comparative pharmacological studies.`,
    specifications: [
      "CAS Number: 33125-97-2",
      "Purity: ≥99.8% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Molecular Formula: C₁₄H₁₆N₂O₂",
      "Molecular Weight: 244.29 g/mol",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/etomidate powder.jpeg",
  },
  {
    slug: "metomidate-powder",
    name: "Metomidate Powder",
    price: 800,
    category: "powder",
    shortDescription: "Research-grade metomidate powder (CAS 5377-20-8) with ≥99% purity. Ideal for veterinary anesthesia research and pharmacological studies.",
    description: `Metomidate powder is a potent imidazole-based hypnotic agent structurally related to etomidate. It acts primarily as a GABA-A receptor positive allosteric modulator and has been extensively used in veterinary medicine and neuropharmacological research.

This compound is particularly valued in research settings for its rapid onset of action and short duration, making it ideal for studies requiring precise anesthetic control. Metomidate is also used in adrenal function testing due to its selective inhibition of 11β-hydroxylase.

Each batch is analytically verified through HPLC, NMR, and mass spectrometry to ensure consistent quality and purity. Supplied as a fine crystalline powder with full Certificate of Analysis and secure, discreet packaging.`,
    specifications: [
      "CAS Number: 5377-20-8",
      "Purity: ≥99% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Molecular Formula: C₁₃H₁₄N₂O₂",
      "Molecular Weight: 230.26 g/mol",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "",
  },
  {
    slug: "propoxate-powder",
    name: "Propoxate Powder",
    price: 800,
    category: "powder",
    shortDescription: "High-purity propoxate powder (CAS 3459-37-4) for advanced pharmacological research. Lab-verified quality with COA included.",
    description: `Propoxate is an imidazole ester derivative related to the etomidate family of compounds. It is used in pharmaceutical research for structure-activity relationship (SAR) studies and as a reference compound in anesthetic pharmacology investigations.

This research-grade powder is manufactured under strict quality control protocols and verified through comprehensive analytical testing including HPLC, GC-MS, and NMR spectroscopy. The compound is supplied in its purest crystalline form to ensure reliable and reproducible research results.

Propoxate powder is packaged in vacuum-sealed, light-protected containers to preserve chemical integrity during storage and transport. Full Certificate of Analysis accompanies every order.`,
    specifications: [
      "CAS Number: 3459-37-4",
      "Purity: ≥99% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "",
  },
  {
    slug: "isopropoxate-powder",
    name: "Isopropoxate Powder",
    price: 800,
    category: "powder",
    shortDescription: "Research-grade isopropoxate powder for pharmacological studies. Analytically verified purity with comprehensive documentation.",
    description: `Isopropoxate is a structural analog within the imidazole-based anesthetic compound family. This research chemical is primarily used in academic and pharmaceutical research settings for comparative pharmacology studies, receptor binding assays, and structure-activity relationship investigations.

As a close structural relative of etomidate and propoxate, isopropoxate provides researchers with valuable data points for understanding the relationship between molecular structure and anesthetic potency. The compound is essential for laboratories conducting systematic studies on imidazole ester pharmacology.

Supplied as a high-purity crystalline powder with full analytical documentation. Each batch undergoes HPLC verification and is accompanied by a comprehensive Certificate of Analysis. Packaged in vacuum-sealed, tamper-evident containers.`,
    specifications: [
      "Purity: ≥99% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "",
  },
  {
    slug: "spirochlorphine-r6890",
    name: "Spirochlorphine R-6890",
    price: 800,
    category: "powder",
    shortDescription: "Spirochlorphine R-6890 powder (CAS 3222-88-6). High-purity research compound with ≥99% verified purity and full COA.",
    description: `Spirochlorphine, designated as R-6890, is a specialized research compound with applications in advanced pharmacological and neurochemical research. This chlorinated spirocyclic compound has drawn significant interest from the research community for its unique structural properties and pharmacological profile.

R-6890 is utilized in various research contexts including receptor binding studies, structure-activity relationship analysis, and as a reference standard in analytical chemistry. Its distinctive spirocyclic molecular architecture makes it particularly valuable for researchers investigating novel pharmacophore geometries.

Our Spirochlorphine R-6890 is produced under stringent quality control conditions and verified through multi-modal analytical testing. Each batch comes with a detailed Certificate of Analysis documenting purity, identity confirmation, and physical properties. Shipped worldwide in secure, discreet packaging.`,
    specifications: [
      "CAS Number: 3222-88-6",
      "Purity: ≥99% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/R-6890Spirochlorphine.jpg",
  },
  {
    slug: "tiletamine-powder",
    name: "Tiletamine Powder",
    price: 800,
    category: "powder",
    shortDescription: "Tiletamine powder (CAS 14176-50-2) with ≥99% purity. Dissociative anesthetic compound for veterinary and pharmacological research.",
    description: `Tiletamine is a dissociative anesthetic agent belonging to the arylcyclohexylamine class, structurally related to ketamine and phencyclidine. It acts primarily as an NMDA receptor antagonist and is widely recognized in veterinary pharmacology, where it is commonly used in combination with zolazepam.

In research settings, tiletamine serves as an important reference compound for studying dissociative anesthesia mechanisms, NMDA receptor pharmacology, and comparative neuropharmacology. Its potency and pharmacokinetic profile make it valuable for dose-response studies and receptor binding assays.

Our tiletamine powder is manufactured to the highest purity standards and verified through comprehensive analytical testing including HPLC, NMR, and mass spectrometry. Supplied as a fine white to off-white crystalline powder with complete Certificate of Analysis and secure packaging.`,
    specifications: [
      "CAS Number: 14176-50-2",
      "Purity: ≥99% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Molecular Formula: C₁₂H₁₇NOS",
      "Molecular Weight: 259.36 g/mol",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "/uploads/tiletamine-for-sale-online_b20240324184805719.jpg",
  },
  {
    slug: "medetomidine-powder",
    name: "Medetomidine Powder",
    price: 800,
    category: "powder",
    shortDescription: "Medetomidine powder (CAS 86347-14-0) with ≥99% purity. Alpha-2 adrenergic agonist for veterinary and pharmacological research.",
    description: `Medetomidine is a potent and highly selective alpha-2 adrenergic receptor agonist widely used in veterinary medicine as a sedative, analgesic, and muscle relaxant. It is the racemic mixture of dexmedetomidine and levomedetomidine, with the dextro-isomer being the pharmacologically active form.

In pharmacological research, medetomidine is invaluable for studying alpha-2 adrenergic receptor function, sympathetic nervous system modulation, and sedation/analgesia mechanisms. The compound is used in receptor binding assays, dose-response studies, and comparative pharmacology research examining the relationship between chirality and biological activity.

Our medetomidine powder is produced under GMP-compliant conditions and undergoes rigorous quality control including HPLC purity verification, chiral analysis, and comprehensive impurity profiling. Each order includes a detailed Certificate of Analysis. Packaged in vacuum-sealed, light-protected containers for optimal stability.`,
    specifications: [
      "CAS Number: 86347-14-0",
      "Purity: ≥99% (HPLC verified)",
      "Form: Fine crystalline powder",
      "Molecular Formula: C₁₃H₁₆N₂",
      "Molecular Weight: 200.28 g/mol",
      "Storage: Cool, dry place, protected from light",
      "Certificate of Analysis included",
      "Vacuum-sealed packaging",
    ],
    sizes: standardSizes,
    inStock: true,
    image: "",
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

    console.log(`\nDone! ${newProducts.length} powder products seeded.`);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
