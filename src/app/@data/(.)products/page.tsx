"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="absolute left-10 top-10 flex h-48 w-48 items-center justify-center border border-black bg-white">
      <Button onClick={() => router.back()}></Button>
      Product!
    </div>
  );
};

export default Page;
