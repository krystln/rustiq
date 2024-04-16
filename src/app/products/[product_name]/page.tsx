import { Product } from "@/components/product";

const Page = ({ params }: { params: { product_name: string } }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-3/4">
        <Product name={params.product_name} />
      </div>
    </div>
  );
};

export default Page;
