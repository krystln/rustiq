"use client";

import { Product } from "@/components/product";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/utility";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = ({ params }: { params: { product_name: string } }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="my-10 flex w-2/3 flex-col items-start overflow-y-auto overflow-x-clip border border-black bg-white p-4">
        <Button onClick={() => router.back()} variant="ghost" className="">
          <GoogleIcon className="scale-125">arrow_back</GoogleIcon>
        </Button>
        <Product name={params.product_name} />
      </div>
    </div>
  );
};

export default Page;
