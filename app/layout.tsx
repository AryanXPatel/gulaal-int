import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Agentation } from "agentation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gulaal International | Online Retail & Project Management in the UAE",
  description:
    "Gulaal International is a UAE-based company specializing in online retail and project management across the Emirates.",
  keywords: [
    "Gulaal International",
    "UAE business",
    "online retail UAE",
    "project management Dubai",
    "Dubai business",
  ],
  openGraph: {
    title: "Gulaal International | Online Retail & Project Management in the UAE",
    description:
      "A UAE-based company specializing in online retail and project management.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulaal International",
    description: "Online retail and project management in the UAE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
