import type { Metadata } from 'next';
import '../globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const vip_hala_font = localFont({
  src: '../../../public/fonts/VIPHala.otf',
});

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doctorii',
  description: 'Doctorii Home Page',
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
        <Footer />
      </body>
    </html>
  );
}
