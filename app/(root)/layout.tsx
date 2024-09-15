import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eshop-store",
  description: "e-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
