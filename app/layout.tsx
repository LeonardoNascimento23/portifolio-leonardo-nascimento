import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Audiowide, Saira } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const saira = Saira({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira',
});

export const metadata: Metadata = {
  title: "Leonardo do Nascimento - Desenvolvedor Full Stack",
  description: "Portfólio e serviços de desenvolvimento web e suporte técnico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${saira.className} ${audiowide.className}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}