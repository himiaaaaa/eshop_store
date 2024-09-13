"use client";

import React, { useEffect, useState } from "react";
import InfiniteMovingCards from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full px-8 py-10 lg:py-14">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full px-4 flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            <span className="text-orange-500">Popular</span> Brand
          </h2>
        </div>
        <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    imageSrc: "/brand-1.jpg",
  },
  {
    imageSrc: "/brand-2.jpg",
  },
  {
    imageSrc: "/brand-3.jpg",
  },
  {
    imageSrc: "/brand-4.jpg",
  },
  {
    imageSrc: "/brand-5.jpg",
  },
];

export default InfiniteMovingCardsDemo;
