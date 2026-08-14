import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

// mintlify.com ships Inter for all UI/body text — exact match, freely licensed.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Substitute for ABC Arizona Flare (commercial). See OUTPUT_PLAN.md.
const instrumentSerif = Instrument_Serif({
  variable: "--font-display-serif",
  weight: "400",
  subsets: ["latin"],
});

// Substitute for Paper Mono (commercial). Used for odometer numerals.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gtmgems — Fractional GTM Engineering for funded B2B SaaS",
  description:
    "Signal-based outbound infrastructure — cold email and LinkedIn — built and operated on tools you own. Not a lead-gen agency, not a cold email sender.",
  icons: {
    icon: "/sites/www-mintlify-com-6fea74f6/root-8a5edab2/seo/favicon.ico",
  },
  openGraph: {
    images: ["/sites/www-mintlify-com-6fea74f6/root-8a5edab2/seo/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background-main font-sans">
        {children}
      </body>
    </html>
  );
}
