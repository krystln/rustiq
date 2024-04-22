import { Product } from "@/components/product";
import { findProductId } from "@/supabse/handler";

const Page = ({ params }: { params: { product_name: string } }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-3/4">
        <Product name={params.product_name.replace(/-/g, " ")} />
      </div>
    </div>
  );
};

export default Page;
