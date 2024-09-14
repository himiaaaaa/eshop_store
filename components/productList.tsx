import { Heart, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { getProducts } from "@/lib/actions/actions";
import Link from "next/link";
import Image from "next/image";

const ProductList = async () => {
  const products = await getProducts();

  console.log("product", products);

  return (
    <div className="w-full px-8 py-10 lg:py-14">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full px-4 flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            <span className="text-orange-500">Best</span> Seller
          </h2>
          <Button className="gap-4" variant="ghost">
            View all products <MoveRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: ProductType) => (
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
                    {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
                  </h3>

                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <div>
                    <Heart />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
