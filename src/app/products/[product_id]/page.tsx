import { Product } from "@/components/product";

const Page = ({ params }: { params: { product_id: string } }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-3/4">
        <Product id={params.product_id} />
      </div>
    </div>
  );
};

export default Page;
