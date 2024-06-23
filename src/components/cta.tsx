"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  DrawingPinFilledIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

const CTA = () => {
  const router = useRouter();

  return (
    <div className="mt-12 flex w-fit gap-4">
      <div className="bg-zinc-900 p-0.5 hover:bg-green-500">
        <Button
          className="rounded-none"
          onClick={() => {
            router.push("/selections");
          }}
        >
          <MagnifyingGlassIcon className="mr-2" />
          Explore our Selections
        </Button>
      </div>
      <div className="bg-zinc-900 p-0.5 hover:bg-orange-500">
        <Button
          className="rounded-none"
          onClick={() => {
            router.push("/selections/popular");
          }}
        >
          <DrawingPinFilledIcon className="mr-2" />
          Checkout Popular Picks
        </Button>
      </div>
    </div>
  );
};

export default CTA;
