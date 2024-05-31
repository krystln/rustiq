"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const CartProduct = ({
  productData,
}: {
  productData: { id: number; amount: number; name: string; price: number };
}) => {
  const { id, amount, name, price } = productData;
  const [productAmount, setProductAmount] = useState(amount);

  return (
    <div className="flex h-1/3 w-full grow gap-8 p-4">
      <Image
        src="http://via.placeholder.com/150x100"
        alt=""
        width={150}
        height={100}
        className="rounded-sm border border-black"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm italic text-gray-700">${price}</p>
        <div className="flex items-center gap-2 border">
          <button
            onClick={() => {
              if (productAmount == 1) {
                console.log("delete product");
                return;
              }
              setProductAmount((prev) => prev - 1);
            }}
            className="rounded-sm p-2 transition-all duration-200 hover:bg-black hover:text-white"
          >
            <MinusIcon />
          </button>
          {productAmount}
          <button
            onClick={() => setProductAmount((prev) => prev + 1)}
            className="rounded-sm p-2 transition-all duration-200 hover:bg-black hover:text-white"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <Button
        variant="destructive"
        className={cn(
          "rounded-sm bg-red-500 p-2",
          productAmount > 1 && "invisible",
        )}
        onClick={() => console.log("delete product")}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex h-full w-fit flex-col items-end gap-2 p-4">
      {CartData.map((cartProduct) => (
        <>
          <CartProduct key={cartProduct.id} productData={cartProduct} />
          <Separator orientation="horizontal" />
        </>
      ))}
    </div>
  );
};

const CartData = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    amount: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    amount: 2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    amount: 3,
  },
];

export default Cart;
