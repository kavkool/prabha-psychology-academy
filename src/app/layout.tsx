import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SEO_DESCRIPTION, SEO_TITLE, SITE_NAME } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prabhapsychology.com"),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: [
    "Cambridge Psychology",
    "A Level Psychology 9990",
    "IGCSE Psychology",
    "AP Psychology tutoring",
    "IB Psychology",
    "exam technique",
    "examiner feedback",
  ],
  authors: [{ name: "Prabhadevi Malarkannan" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
