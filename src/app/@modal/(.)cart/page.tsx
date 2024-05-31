"use client";

import Cart from "@/components/cart";
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
    <div className="fixed inset-0 z-50 flex flex-col items-end justify-center bg-gray-900 bg-opacity-50">
      <div className="flex h-full w-1/3 flex-col items-start overflow-auto overflow-y-auto overflow-x-clip border border-black bg-white p-8 pb-20">
        <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
          <GoogleIcon>close</GoogleIcon>
        </Button>
        <Cart />
        <Button
          className="w-full rounded-sm"
          onClick={() => {
            router.replace("/checkout");
            router.refresh();
          }}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Page;
