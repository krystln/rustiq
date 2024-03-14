"use client";

import React, { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { getUserData } from "@/lib/cookie-handling";
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<RequestCookie | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetcher();
  });

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent className="flex shrink-0 flex-col p-4">
              <Link href={"/"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="flex shrink-0 flex-col p-4">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link href={"/products"}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>You</NavigationMenuTrigger>
            <NavigationMenuContent className="flex shrink-0 flex-col p-4">
              {!user ? (
                <div>No user Present</div>
              ) : (
                <>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href={"/profile"}>Profile</Link>
                  </NavigationMenuLink>
                  <Link href={"/cart"}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Cart
                    </NavigationMenuLink>
                  </Link>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href={"/orders"}>Previous Orders</Link>
                  </NavigationMenuLink>
                </>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
