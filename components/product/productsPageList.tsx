"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./productCard";
import Loader from "../Loader";
import ProductFilter from "./productFilter";

const ProductsPageList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); 
  const [sortOption, setSortOption] = useState<string>("Newest"); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = products
    .filter((product) =>
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    )
    .sort((a, b) => {
      if (sortOption === "Price: Low to High") {
        return a.price - b.price;
      } else if (sortOption === "Price: High to Low") {
        return b.price - a.price;
      } else if (sortOption === "Newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      return 0;
    });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full px-8 py-10 lg:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ProductFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          sortOption={sortOption}
          setSortOption={setSortOption} 
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPageList;


