import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ToasterProvider } from "@/lib/ToasterProvider";

const raleway = Raleway({
  subsets: ["latin"]
});

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
      <body className={`${raleway.className}`}>
        <ClerkProvider>
          <ToasterProvider />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
