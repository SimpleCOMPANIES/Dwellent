import type { Metadata } from "next";
import { Inter, Newsreader, Bungee } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const bungee = Bungee({
  variable: "--font-funky",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dwellent — Insure Your Rent. Replace the Deposit.",
  description:
    "Dwellent replaces the cash security deposit and the traditional lease co-signer with an insurance-backed guaranty — approved in minutes, not weeks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${bungee.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
