import "../globals.css";
import type { Metadata } from "next";
import DoctorNavbar from "@/components/DoctorNavbar";
import localFont from "next/font/local";

const vip_hala_font = localFont({
  src: "../../../public/fonts/VIPHala.otf",
});

// const inter = Inter({ subsets: ['latin'] });

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
      <body className={vip_hala_font.className}>
        <DoctorNavbar />
        {children}
      </body>
    </html>
  );
}
