import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Audiowide, Saira } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import BackgroundSVG from "./components/BackgroundSVG";
import ParallaxProvider from "./components/ParallaxProvider";

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
  title: "LEONARDO DO NASCIMENTO",
  description: "Portfólio de um desenvolvedor full stack especializado em criar soluções digitais inovadoras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${saira.className} ${audiowide.className}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <BackgroundSVG />
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}