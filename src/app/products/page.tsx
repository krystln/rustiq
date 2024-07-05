import Card from "@/components/product/card";
import { Product } from "@/supabase/schema";

const Page = async ({ params }: { params: { product_name: string } }) => {
  const [data, error]: [Product[], Error] = await fetch(
    `${process.env.BASE_URL}/api/v0.1/products`,
    { cache: "no-store" },
  ).then((res) => res.json());

  return (
    <div className="mt-12 flex h-full w-full justify-center">
      <div className="flex w-3/4 flex-wrap justify-evenly gap-10">
        {error
          ? "Products Unavailable"
          : data.map((product) => {
              return <Card productData={product} />;
            })}
      </div>
    </div>
  );
};

export default Page;
