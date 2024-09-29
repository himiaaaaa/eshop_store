import ProductCard from "@/components/product/productCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  console.log("collectiondetails", collectionDetails);

  return (
    <div className="px-10 pt-24 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {collectionDetails.title}
      </h1>
      <p className="mt-3 text-lg text-gray-600">
        {collectionDetails.description}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div></div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
