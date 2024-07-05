import { cn } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Variants from "./variants";
import { Product } from "@/supabase/schema";

const Card: React.FC<{ className?: string; productData: Product }> = ({
  className,
  productData,
}) => {
  return (
    <div className={cn("group relative w-[200px] shrink-0", className)}>
      <Link
        href={`/products/${productData.id}`}
        className="absolute left-1/2 top-[125px] h-20 w-20 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-black text-xl font-black text-white transition group-hover:block group-hover:scale-100"
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          VIEW
        </span>
      </Link>
      <Image
        src="http://via.placeholder.com/200x250"
        alt=""
        width={200}
        height={250}
      />
      <div className="mt-2 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">{productData.name}</h2>
          <p className="">$ {productData.price}</p>
        </div>
        <Button variant="ghost">
          <ShoppingCartIcon strokeWidth={1.5} />
        </Button>
      </div>
      <Variants colors={["#00ff00", "#ff0000", "#0000ff"]} />
    </div>
  );
};

export default Card;
