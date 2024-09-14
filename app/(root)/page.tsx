"use client";

import Category from "@/components/category";
import Collections from "@/components/collections";
import ProductList from "@/components/productList";
import Hero from "@/components/hero";
import Service from "@/components/service";
import CTA from "@/components/cta";
import Brands from '@/components/brand'
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Hero />
    <Category />
    <Collections />
    <ProductList />
    <Service />
    <CTA />
    <Brands />
    <Footer />
    </>
  );
}
