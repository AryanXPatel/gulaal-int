import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gulaal International — E-commerce & Project Management in UAE",
  description:
    "Gulaal International delivers end-to-end e-commerce solutions and expert project management services for ambitious businesses in the UAE and MENA region.",
  keywords: [
    "e-commerce UAE",
    "project management UAE",
    "Gulaal International",
    "Dubai e-commerce",
    "UAE business services",
    "MENA project management",
  ],
  openGraph: {
    title: "Gulaal International — E-commerce & Project Management in UAE",
    description:
      "End-to-end e-commerce solutions and expert project management for UAE businesses.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulaal International",
    description: "E-commerce & Project Management experts in the UAE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
