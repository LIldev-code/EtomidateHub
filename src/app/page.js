import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import Settings from "@/models/Settings";
import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Etomidatehub — Premium Powder, K-Pods Vape & Liquid",
  description:
    "Etomidatehub.com — Premium etomidate powder, K-Pods vape cartridges & liquid solutions. Lab-tested ≥99.8% purity. COA certified, fast discreet worldwide shipping within 24h.",
  keywords: [
    // Buying intent — general
    "buy etomidate online",
    "etomidate for sale",
    "etomidate shop online",
    "best etomidate supplier",
    "trusted etomidate vendor",
    "pharmaceutical grade etomidate",
    "research grade etomidate",

    // Powder / crystal products
    "etomidate powder buy",
    "etomidate powder for sale",
    "metomidate powder",
    "propoxate powder",
    "isopropoxate powder",
    "tiletamine powder",
    "medetomidine powder",
    "spirochlorphine R-6890",
    "etomidate concentrate",

    // Vape / K-Pods products
    "etomidate vape pods buy",
    "etomidate K-Pods",
    "etomidate vape cartridge",
    "etomidate disposable vape",
    "ketamine pods",
    "space oil",
    "buy space oil",
    "space oil pods",
    "space pods vape",
    "zombie vapes",
    "eto vapes",
    "e-cigarettes etomidate",
    "zombie cigarettes",
    "pharmaceutical vape pods",

    // Liquid products
    "etomidate liquid buy",
    "etomidate liquid solution",
    "etomidate e-liquid",
    "zombie juice",
    "liquid ketamine",
    "eto juice",
    "etomidate oil",
    "etomidate drops",

    // Vape flavours
    "etomidate flavours",
    "vape flavours raspberry",
    "vape flavours blueberry",
    "vape flavours mango",

    // Purity, testing & quality
    "etomidate 99.8% purity",
    "etomidate COA included",
    "HPLC verified etomidate",

    // CAS numbers
    "33125-97-2",
    "CAS 33125-97-2",
    "buy CAS 33125-97-2",
    "etomidate CAS number",
    "etomidate 33125-97-2",

    // Shipping & fulfillment
    "discreet etomidate shipping",
    "etomidate worldwide delivery 24h",
    "etomidate bulk discount",
  ],
  openGraph: {
    title: "Etomidatehub — Premium Powder, Vape & Liquid",
    description:
      "Etomidatehub.com — Premium etomidate powder, K-Pods vape cartridges & liquid. ≥99.8% purity, lab-tested with COA. Fast discreet shipping worldwide.",
    url: "https://etomidatehub.com",
    siteName: "Etomidatehub.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etomidatehub — Premium Powder, Vape & Liquid",
    description:
      "Etomidatehub.com — Premium etomidate powder, K-Pods vape & liquid. ≥99.8% purity, lab-tested, COA included. Ships worldwide within 24h.",
  },
  alternates: {
    canonical: "https://etomidatehub.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  const conn = await dbConnect();
  
  if (!conn) {
    const siteSettings = {
      announcement: "",
      heroSubtitle: "",
      siteName: "Etomidatehub",
      tagline: "",
    };
    return <HomeClient products={[]} siteSettings={siteSettings} />;
  }
  const productsRaw = await Product.find({}).lean();
  const products = productsRaw.map((p) => ({
    _id: p._id.toString(),
    name: p.name || "",
    slug: p.slug || "",
    price: p.price || 0,
    category: p.category || "",
    shortDescription: p.shortDescription || "",
    description: p.description || "",
    specifications: p.specifications || [],
    sizes: (p.sizes || []).map((s) => ({ label: s.label, price: s.price })),
    inStock: p.inStock ?? true,
    image: p.image || "",
  }));

  let raw = await Settings.findOne({ key: "main" }).lean();
  const siteSettings = {
    announcement: raw?.announcement || "",
    heroSubtitle: raw?.heroSubtitle || "",
    siteName: raw?.siteName || "Etomidatehub",
    tagline: raw?.tagline || "",
  };

  return <HomeClient products={products} siteSettings={siteSettings} />;
}
