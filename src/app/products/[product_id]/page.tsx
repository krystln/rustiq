import Card from "@/components/product/card";
import { Product } from "@/supabase/schema";

const Page = async ({ params }: { params: { product_id: string } }) => {
  const [data, error]: [Product, Error] = await fetch(
    `${process.env.BASE_URL}/api/v0.1/products/${params.product_id}`,
    { cache: "no-store" },
  ).then((res) => res.json());

  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-3/4">
        {error ? (
          "Product not found"
        ) : data ? (
          <Card productData={data} />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default Page;
