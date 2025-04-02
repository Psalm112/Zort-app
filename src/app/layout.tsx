import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoaderWrapper from "@/components/general/LoaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | ZORT - Smart Betting Analytics",
    default: "ZORT - AI-Powered Sports Betting Tracker",
  },
  description:
    "Track, analyze, and improve your sports betting with ZORT's AI-powered analytics platform.",
  keywords: [
    "sports betting",
    "bet tracking",
    "betting analytics",
    "AI betting",
    "bet slip scanner",
  ],
  authors: [
    { name: "Samuel Adebola Oyenuga | samueladeboaloyenuga@gmail.com" },
  ],
  creator: "ZORT",
  themeColor: "#6D28D9",
  viewport: "width=device-width, initial-scale=1, user-scalable=no",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zort-app.netlify.app/",
    siteName: "ZORT",
    title: "ZORT - AI-Powered Sports Betting Tracker",
    description:
      "Track, analyze, and improve your sports betting with ZORT's AI-powered analytics platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <LoaderWrapper>
          <Navbar />
          {children}
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}
