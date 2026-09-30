import LabVerificationClient from "@/components/LabVerificationClient";

export const metadata = {
  title: "COA & HPLC Documentation — Laboratory Verification | Etomidatehub.com",
  description:
    "How Etomidatehub.com verifies every batch: HPLC purity analysis, Certificate of Analysis (COA) documentation, GC-MS and NMR identity confirmation, and how to read and cross-check your COA.",
  keywords: [
    "etomidate COA",
    "certificate of analysis etomidate",
    "HPLC etomidate purity",
    "HPLC verified etomidate",
    "etomidate lab verification",
    "etomidate batch testing",
    "etomidate GC-MS",
    "etomidate NMR confirmation",
    "how to read a COA",
    "etomidate 99.8% purity documentation",
    "laboratory verification etomidate",
    "etomidate quality control",
  ],
  openGraph: {
    title: "COA & HPLC Documentation — Laboratory Verification",
    description:
      "HPLC purity analysis, Certificate of Analysis documentation, and identity confirmation for every batch. Learn how our laboratory verification works.",
    url: "https://etomidatehub.com/lab-verification",
    siteName: "Etomidatehub.com",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "COA & HPLC Documentation — Laboratory Verification",
    description:
      "HPLC purity analysis, COA documentation, and identity confirmation for every batch.",
  },
  alternates: {
    canonical: "https://etomidatehub.com/lab-verification",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LabVerificationPage() {
  return <LabVerificationClient />;
}
