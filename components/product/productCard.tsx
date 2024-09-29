"use client";

import Link from "next/link";
import Image from "next/image";

import ClickableHeart from "../clickableHeart";

interface ProductCardProps {
    product: ProductType;
    updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, updateSignedInUser }: ProductCardProps) => {

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
        <ClickableHeart product={product} updateSignedInUser={updateSignedInUser}  />
      </div>
    </Link>
  );
};

export default ProductCard;
