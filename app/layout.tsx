import type { Metadata } from "next";
import { Montserrat, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LA Creative Marketing | Iconic Brands",
  description: "We turn visionary ideas into iconic brands. Let's make the extraordinary the standard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bodoni.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col bg-black text-black font-sans overflow-x-hidden">
        <LenisProvider />
        <Navbar />
        <main className="grow flex flex-col relative z-10">
          {children}
        </main>
        <div className="relative z-20 bg-black">
          <Footer />
        </div>
      </body>
    </html>
  );
}
