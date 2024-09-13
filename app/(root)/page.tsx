"use client";

import Category from "@/components/category";
import Collections from "@/components/collections";
import ProductList from "@/components/productList";
import Hero from "@/components/hero";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
    <Hero />
    <Category />
    <Collections />
    <ProductList />
    <Service />
    </>
  );
}
