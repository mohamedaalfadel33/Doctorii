import type { Metadata } from 'next';
import '../globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';

const vip_hala_font = localFont({
  src: '../../../public/fonts/VIPHala.otf',
});

export const metadata: Metadata = {
  title: 'Doctorii login',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vip_hala_font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
