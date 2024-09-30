import Category from "@/components/category";
import Collections from "@/components/collections";
import ProductList from "@/components/product/productList";
import Hero from "@/components/hero";
import Service from "@/components/service";
import CTA from "@/components/cta";
import Brands from '@/components/brand'

export default async function Home() {

  return (
    <>
    <Hero />
    <Category />
    <Collections />
    <ProductList />
    <Service />
    <CTA />
    <Brands />
    </>
  );
}

export const dynamic = "force-dynamic";
