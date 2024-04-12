"use client";

import { Product } from "@/components/product";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/utility";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { product_id: string } }) => {
  const router = useRouter();

  return (
    <div className="absolute z-50 flex h-full w-full justify-center overflow-clip bg-[#00000088]">
      <div className="my-10 flex w-2/3 flex-col items-start overflow-y-auto overflow-x-clip border border-black bg-white p-4">
        <Button onClick={() => router.back()} variant="ghost" className="">
          <GoogleIcon className="scale-125">arrow_back</GoogleIcon>
        </Button>
        <Product id={params.product_id} />
      </div>
    </div>
  );
};

export default Page;
