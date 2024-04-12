import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/utility";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  if (!cookies().get("user")) redirect("/login");

  const userData = JSON.parse(cookies().get("user")?.value!);
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="center flex w-2/3 flex-col items-center gap-10">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <div className="flex items-center gap-4">
          <Image
            src={userData.picture}
            alt=""
            width={100}
            height={100}
            className="rounded-full border border-black"
          />
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <h2 className="text-lg">{userData.email}</h2>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/cart" className="flex items-center">
            <Button variant="outline" className="text-lg">
              <GoogleIcon>shopping_cart</GoogleIcon>
              Cart
            </Button>
          </Link>
          <Link href="/cart" className="flex items-center">
            <Button variant="outline" className="text-lg">
              <GoogleIcon>shopping_cart</GoogleIcon>
              Previous Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
