import Link from "next/link";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import ProductDetailClient from "./ProductDetailClient";

const BASE_URL = "https://etomidatesite.com";

async function getProduct(slug) {
  try {
    await dbConnect();
    const product = await Product.findOne({ slug }).lean();
    if (!product) return null;
    return JSON.parse(JSON.stringify(product));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | Etomidatesite.com",
      description: "The product you are looking for could not be found.",
    };
  }

  const priceFrom = product.sizes?.[0]?.price || product.price || 0;
  const title = `${product.name} — Buy Online | Etomidatesite.com`;
  const description = product.shortDescription
    ? `${product.shortDescription} From €${priceFrom}. ≥99.8% purity, COA included. Discreet worldwide shipping.`
    : `Buy ${product.name} online. Pharmaceutical-grade, lab-tested ≥99.8% purity. COA included. From €${priceFrom}. Discreet worldwide shipping.`;

  return {
    title,
    description,
    keywords: [
      product.name.toLowerCase(),
      `buy ${product.name.toLowerCase()}`,
      `${product.name.toLowerCase()} for sale`,
      `${product.name.toLowerCase()} online`,
      `${product.category} etomidate`,
      "buy etomidate online",
      "etomidate for sale",
      "pharmaceutical grade etomidate",
      "etomidate COA",
      "discreet etomidate shipping",
      "33125-97-2",
      "CAS 33125-97-2",
    ],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/shop/${slug}`,
      siteName: "Etomidatesite.com",
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}/shop/${slug}`,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-[#f59e0b] hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
