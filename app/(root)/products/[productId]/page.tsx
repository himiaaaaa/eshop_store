import ProductOverview from "@/components/product/productOverview";
import { getProduct } from "@/lib/actions/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productInfo = await getProduct(params.productId);

  return (
    <>
      <ProductOverview productInfo={productInfo} />
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
