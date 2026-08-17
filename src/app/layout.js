import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
  metadataBase: new URL("https://etomidatehub.com"),
  title: {
    default: "Etomidatehub — Etomidate, Etomidatestore, Premium Powder, K-Pods Vape & Liquid | Etomidatehub.com",
    template: "%s | Etomidatehub.com",
  },
  description:
    "Etomidatehub.com — Etomidate, Etomidatestore, Premium etomidate powder, K-Pods vape cartridges & liquid solutions. Lab-tested ≥99.8% purity. COA certified, discreet worldwide shipping within 24h.",
  keywords: [
    // Brand
    "Etomidatehub",
    "etomidatehub.com",
    "Etomidate",

    // Buying intent — general
    "buy etomidate online",
    "etomidate for sale",
    "order etomidate",
    "etomidate shop",
    "etomidate store",
    "etomidate supplier",
    "etomidate vendor",
    "etomidate wholesale",
    "etomidate bulk order",
    "etomidate research chemical",
    "etomidate anesthetic compound",

    // Powder / crystal products
    "etomidate powder",
    "buy etomidate powder",
    "etomidate powder for sale",
    "pure etomidate powder",
    "pharmaceutical grade etomidate powder",
    "metomidate powder",
    "propoxate powder",
    "isopropoxate powder",
    "tiletamine powder",
    "medetomidine powder",
    "spirochlorphine R-6890",
    "etomidate concentrate",

    // Vape / K-Pods products
    "etomidate vape",
    "etomidate vape pods",
    "etomidate K-Pods",
    "buy etomidate K-Pods",
    "etomidate vape cartridge",
    "etomidate disposable vape",
    "ketamine pods",
    "zombie vape",
    "buy zombie vape",
    "zombie vape pods",
    "zombie K-Pod",
    "eto vapes",
    "e-cigarettes etomidate",
    "zombie cigarettes",
    "space oil",
    "buy space oil",
    "space oil vape",
    "space oil pods",
    "space pods",
    "research chemical vape",
    "pharmaceutical vape pods",

    // Liquid products
    "etomidate liquid solution",
    "buy etomidate liquid",
    "etomidate liquid for sale",
    "etomidate e-liquid",
    "etomidate e-liquids",
    "zombie juice",
    "liquid ketamine",
    "eto juice",
    "etomidate oil",
    "etomidate oil for sale",
    "etomidate drops",
    "etomidate solution drops",

    // Vape flavours
    "etomidate flavours",
    "etomidate flavored pods",
    "etomidate menthol pods",
    "vape flavours raspberry",
    "vape flavours blueberry",
    "vape flavours mango",
    "vape flavours grape",

    // Purity, testing & quality
    "pharmaceutical grade etomidate",
    "research grade etomidate",
    "lab tested etomidate",
    "etomidate 99.8 purity",
    "etomidate COA certified",
    "HPLC tested etomidate",

    // CAS numbers
    "etomidate",
    "etomidate 33125-97-2",
    "33125-97-2",
    "CAS 33125-97-2",
    "CAS number 33125-97-2",
    "buy 33125-97-2",
    "33125-97-2 for sale",
    "33125-97-2 powder",
    "33125-97-2 buy online",
    "etomidate CAS number",

    // Shipping & fulfillment
    "discreet etomidate shipping",
    "etomidate worldwide delivery",
  ],
  authors: [{ name: "Etomidatehub.com" }],
  creator: "Etomidatehub.com",
  publisher: "Etomidatehub.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://etomidatehub.com",
    siteName: "Etomidatehub.com",
    title: "Etomidatehub — Premium Powder, K-Pods Vape & Liquid",
    description:
      "Etomidatehub.com — Premium etomidate powder, K-Pods vape cartridges & liquid. ≥99.8% purity, COA included, discreet worldwide shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etomidatehub — Premium Powder, Vape & Liquid",
    description:
      "Etomidatehub.com — Premium etomidate powder, K-Pods vape cartridges & liquid. Lab-tested ≥99.8% purity. Ships worldwide within 24h.",
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
    canonical: "https://etomidatehub.com",
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

        {/* Tawk.to Live Chat script */}
        <Script id="tawkto-chat" type="text/javascript" strategy="afterInteractive">
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a838ded5981892f72ddeca7/1k08u4q79';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
          `}
        </Script>
      </body>
    </html>
  );
}
