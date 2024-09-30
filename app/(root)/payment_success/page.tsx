"use client"

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Successful Payment!</p>
      <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Thank you! It is on the way!</p>
      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-orange-400 hover:text-white"
      >
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
