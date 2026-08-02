import dbConnect from "@/lib/mongodb";
import Settings from "@/models/Settings";
import AboutClient from "@/components/AboutClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Etomidatehub — Trusted Etomidate Supplier with 7 Years of Experience | Etomidatehub.com",
  description:
    "Etomidatehub.com has 7 years of experience delivering pharmaceutical-grade etomidate. Learn about our GMP-certified lab sourcing, rigorous quality testing, and commitment to ≥99.8% purity with every product.",
  keywords: [
    "trusted etomidate supplier",
    "reliable etomidate vendor",
    "best etomidate supplier",
    "etomidate supplier 7 years experience",
    "pharmaceutical grade etomidate supplier",
    "GMP certified etomidate",
    "etomidate quality standards",
    "HPLC tested etomidate supplier",
    "etomidate COA every order",
    "etomidate 99.8% purity guarantee",
    "discreet etomidate supplier",
    "etomidate worldwide shipping supplier",
    "about Etomidatehub",
    "etomidatehub.com review",
  ],
  openGraph: {
    title: "About Etomidatehub — 7 Years of Quality & Trust",
    description:
      "GMP-certified lab sourcing, ≥99.8% purity, COA with every order. Learn why researchers worldwide trust Etomidatehub.com.",
    url: "https://etomidatehub.com/about",
  },
  alternates: {
    canonical: "https://etomidatehub.com/about",
  },
};

export default async function AboutPage() {
  const conn = await dbConnect();
  let siteSettings;
  if (!conn) {
    siteSettings = { aboutText: "" };
  } else {
    siteSettings = await Settings.findOne({ key: "main" }).lean();
    if (!siteSettings) {
      siteSettings = { aboutText: "" };
    }
  }

  return <AboutClient aboutText={siteSettings.aboutText || ""} />;
}


