"use client";

import Loader from "@/components/Loader";
import ProductCard from "@/components/product/productCard";
import { getProduct } from "@/lib/actions/actions";
import { useUser } from "@clerk/nextjs";
import { use, useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  const getUser = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setSignedInUser(data);
      setLoading(false);
    } catch (err) {
      console.log("[users_GET_error", err);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const getWishlistProducts = async () => {
    setLoading(true);

    if (!signedInUser) return;

    const wishlistProducts = await Promise.all(
      signedInUser.wishlist.map(async (productId) => {
        const res = await getProduct(productId);
        return res;
      })
    );

    setWishlist(wishlistProducts);
    setLoading(false);
  };

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts();
    }
  }, [signedInUser]);

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-24">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Your Wishlist
            </h1>

        <div className="mt-12 border-t border-gray-200 py-6 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {wishlist.length === 0 && <p>No product in your wishlist</p>}
          {wishlist.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              updateSignedInUser={updateSignedInUser}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Wishlist;
