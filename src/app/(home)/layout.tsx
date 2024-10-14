import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Toaster } from "@/components/ui/toaster";

import { Rubik } from "next/font/google";

const vip_hala_font = localFont({
  src: "../../../public/fonts/VIPHala.otf",
});

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctorii",
  description: "Doctorii Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
