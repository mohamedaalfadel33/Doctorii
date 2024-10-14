import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctorii login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#eeeeee]`}>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
