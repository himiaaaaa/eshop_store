"use client";

import Link from "next/link";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {

    try {
      setLoading(true);

      const res = await fetch("/api/users");
      const data = await res.json();

      setSignedInUser(data)
      setIsLiked(data.wishlist.includes(product._id));

      setLoading(false);

    } catch (err) {

      console.log("[users_GET_error]", err);

    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); //prevent Link submit

    try {
      if (!user) {

        router.push("/sign-in");
        return;

      } else {

        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        
        const updatedUser = await res.json();
        setIsLiked(updatedUser.wishlist.includes(product._id));
       
      }
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

  return (
    <Link
      key={product._id}
      href={`/products/${product._id}`}
      className="group"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          alt="product"
          src={product.media[0]}
          className="bg-white h-full w-full aspect-square object-contain object-center group-hover:opacity-75"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <h3 className="mt-4 text-sm text-gray-700">
            {product.title.length > 30
              ? `${product.title.substring(0, 30)}...`
              : product.title}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            ${product.price}
          </p>
        </div>
        <button onClick={handleLike}>
          <Heart fill={`${isLiked? "orange": "white"}`}/>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
