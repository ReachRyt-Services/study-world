import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const montserratHeadline = Montserrat({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const robotoBody = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const robotoLabel = Roboto({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Study World Group | Excellence in Education",
  description: "Excellence in Education, Rooted in Tradition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserratHeadline.variable} ${robotoBody.variable} ${robotoLabel.variable} bg-surface font-body text-on-surface antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
