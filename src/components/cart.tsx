"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const CartProduct = ({ id, amount }: { id: number; amount: number }) => {
  const [productAmount, setProductAmount] = useState(amount);

  return (
    <div className="flex h-1/3 w-full bg-stone-200">
      <Image
        src="http://via.placeholder.com/250x250"
        alt=""
        width={250}
        height={200}
      />
      <div>
        <h1 className="text-lg font-bold">Product ID: {id}</h1>
        <p>Amount: {productAmount}</p>
        <Button onClick={() => setProductAmount((prev) => prev + 1)}>+</Button>
        <Button onClick={() => setProductAmount((prev) => prev - 1)}>-</Button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex h-full w-full flex-col items-end gap-2">
      {CartData.map((cartProduct) => (
        <CartProduct
          key={cartProduct.id}
          id={cartProduct.id}
          amount={cartProduct.amount}
        />
      ))}
      <Button>Checkout</Button>
    </div>
  );
};

const CartData = [
  {
    id: 1,
    amount: 1,
  },
  {
    id: 2,
    amount: 2,
  },
  {
    id: 3,
    amount: 3,
  },
];

export default Cart;
