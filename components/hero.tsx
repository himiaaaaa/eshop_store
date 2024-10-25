"use client";
import Image from "next/image";
import hero_banner from "@/public/hero-banner.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src={hero_banner}
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen min-h-[360px] object-cover"
        priority={true}
      />
      <div className="absolute top-0 left-0 w-2/3 h-full flex items-center">
        <div className="container mx-auto px-6 py-6 md:px-8 lg:px-16 flex flex-col items-center">
          <h1 className="italic text-center text-3xl md:text-8xl font-black text-white tracking-tighter">
            <span className="block md:text-6xl mb-3">HIGN QUALITY</span> PET FOOD
          </h1>
          <p className="text-center text-lg md:text-xl text-white mt-4">
            Sale up to 40% off today
          </p>
          <Link href="/products" className="mt-4">
            <Button variant="outline" className="h-14 px-8 text-lg" aria-label="Shop Now">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}