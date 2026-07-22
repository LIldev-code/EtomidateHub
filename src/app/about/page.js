import dbConnect from "@/lib/mongodb";
import Settings from "@/models/Settings";
import AboutClient from "@/components/AboutClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Etomidatesite — Trusted Etomidate Supplier Since 2019 | Etomidatesite.com",
  description:
    "Etomidatesite.com has been a trusted name in pharmaceutical-grade etomidate since 2019. Learn about our GMP-certified lab sourcing, rigorous quality testing, and commitment to ≥99.8% purity with every product.",
  keywords: [
    "trusted etomidate supplier",
    "reliable etomidate vendor",
    "best etomidate supplier 2024",
    "etomidate supplier since 2019",
    "pharmaceutical grade etomidate supplier",
    "GMP certified etomidate",
    "etomidate quality standards",
    "HPLC tested etomidate supplier",
    "etomidate COA every order",
    "etomidate 99.8% purity guarantee",
    "discreet etomidate supplier",
    "etomidate worldwide shipping supplier",
    "about Etomidatesite",
    "etomidatesite.com review",
  ],
  openGraph: {
    title: "About Etomidatesite — Quality & Trust Since 2019",
    description:
      "GMP-certified lab sourcing, ≥99.8% purity, COA with every order. Learn why researchers worldwide trust Etomidatesite.com.",
    url: "https://etomidatesite.com/about",
  },
  alternates: {
    canonical: "https://etomidatesite.com/about",
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


