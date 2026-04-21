import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "CondMove",
  description: "Mobilidade. Velocidade. Satisfação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
