import "../globals.css";
import type { Metadata } from "next";
import DoctorNavbar from "@/components/DoctorNavbar";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctorii",
  description: "Doctorii Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#eeeeee]`}>
        <DoctorNavbar />
        {children}
      </body>
    </html>
  );
}
