import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./productCard";
import Link from "next/link";

const ProductList = async () => {
  const products = await getProducts();

  console.log("product", products);

  return (
    <div className="w-full px-8 py-10 lg:py-14">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full px-4 flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            <span className="text-orange-600">Best</span> Seller
          </h2>
          <Button className="gap-4" variant="ghost">
            <Link href='/products' className="flex flex-row items-center justify-center">
              <p className="pr-2">View all products</p> <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductList;
