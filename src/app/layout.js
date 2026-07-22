import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import ToastProvider from "@/components/ToastProvider";
import ImageProtection from "@/components/ImageProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://etomidatesite.com"),
  title: {
    default: "Etomidate Site — Premium Powder, K-Pods Vape & Liquid | Etomidatesite.com",
    template: "%s | Etomidatesite.com",
  },
  description:
    "Etomidatesite.com — Premium etomidate powder, K-Pods vape cartridges & liquid solutions. Lab-tested ≥99.8% purity. COA certified, discreet worldwide shipping within 24h.",
  keywords: [
    "buy etomidate online",
    "etomidate for sale",
    "order etomidate",
    "etomidate shop",
    "etomidate store",
    "etomidate powder",
    "buy etomidate powder",
    "etomidate powder for sale",
    "pure etomidate powder",
    "pharmaceutical grade etomidate powder",
    "etomidate vape",
    "etomidate vape pods",
    "etomidate K-Pods",
    "buy etomidate K-Pods",
    "etomidate vape cartridge",
    "etomidate disposable vape",
    "etomidate liquid solution",
    "buy etomidate liquid",
    "etomidate liquid for sale",
    "etomidate",
    "etomidate supplier",
    "etomidate vendor",
    "pharmaceutical grade etomidate",
    "research grade etomidate",
    "lab tested etomidate",
    "etomidate 99.8 purity",
    "etomidate COA certified",
    "HPLC tested etomidate",
    "discreet etomidate shipping",
    "etomidate worldwide delivery",
    "etomidate bulk order",
    "etomidate wholesale",
    "etomidate research chemical",
    "etomidate anesthetic compound",
    "etomidate 33125-97-2",
    "33125-97-2",
    "CAS 33125-97-2",
    "CAS number 33125-97-2",
    "buy 33125-97-2",
    "33125-97-2 for sale",
    "33125-97-2 powder",
    "33125-97-2 buy online",
    "etomidate CAS number",
    "zombie vape",
    "buy zombie vape",
    "zombie vape pods",
    "zombie K-Pod",
    "piao piao vape",
    "buy piao piao vape",
    "piao piao pods",
    "piao piao K-Pod",
    "cychlorphine",
    "cychlorphine HCL",
    "cychlorphine HCL powder",
    "buy cychlorphine HCL",
    "cychlorphine 16145-71-4",
    "16145-71-4",
    "CAS 16145-71-4",
    "buy 16145-71-4",
    "16145-71-4 powder",
    "16145-71-4 for sale",
    "Etomidatesite",
    "etomidatesite.com",
    "space oil",
    "buy space oil",
    "space oil vape",
    "space oil pods",
    "etomidate e-liquid",
    "etomidate e-liquids",
    "etomidate flavours",
    "etomidate flavored pods",
    "etomidate menthol pods",
    "etomidate oil",
    "etomidate oil for sale",
    "etomidate drops",
    "etomidate solution drops",
    "etomidate nasal spray",
    "etomidate oral solution",
    "etomidate concentrate",
    "space pods",
    "research chemical vape",
    "pharmaceutical vape pods",
  ],
  authors: [{ name: "Etomidatesite.com" }],
  creator: "Etomidatesite.com",
  publisher: "Etomidatesite.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://etomidatesite.com",
    siteName: "Etomidatesite.com",
    title: "Etomidate Site — Premium Powder, K-Pods Vape & Liquid",
    description:
      "Etomidatesite.com — Premium etomidate powder, K-Pods vape cartridges & liquid. ≥99.8% purity, COA included, discreet worldwide shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etomidate Site — Premium Powder, Vape & Liquid",
    description:
      "Etomidatesite.com — Premium etomidate powder, K-Pods vape cartridges & liquid. Lab-tested ≥99.8% purity. Ships worldwide within 24h.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://etomidatesite.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "6uz5n6ngf_ozH4xgFtl0Clt_Tm2OBYScFmgYVpqS5gk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ImageProtection />
        <ToastProvider />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
