import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tehran Properties - Real Estate in Tehran, Iran",
  description: "Find your dream property in Tehran. Browse apartments, houses, villas for sale and rent. Expert real estate agents and comprehensive property listings.",
  keywords: ["Tehran", "Real Estate", "Properties", "Apartments", "Houses", "Villas", "Iran", "Buy", "Rent", "Property"],
  authors: [{ name: "Tehran Properties Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tehran Properties - Real Estate in Tehran",
    description: "Find your dream property in Tehran. Browse apartments, houses, villas for sale and rent.",
    url: "https://tehranproperties.com",
    siteName: "Tehran Properties",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tehran Properties",
    description: "Find your dream property in Tehran. Browse apartments, houses, villas for sale and rent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
