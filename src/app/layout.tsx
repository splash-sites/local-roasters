import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { site } from "@/lib/site";
import "./globals.css";

// Fontes hospedadas no próprio projeto (Anton e Archivo, licença OFL)
const anton = localFont({ src: "../fonts/anton-latin-400.woff2", weight: "400", variable: "--font-anton", display: "swap" });
const archivo = localFont({ src: "../fonts/archivo-latin-variable.woff2", weight: "100 900", variable: "--font-archivo", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Local Roasters · Cafés especiais torrados em Torres", template: "%s · Local Roasters" },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${archivo.variable}`}>
      <body className="font-sans text-base leading-relaxed antialiased md:text-[17px]">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
