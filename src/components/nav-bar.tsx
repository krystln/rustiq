"use client";

import React from "react";

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

// type contentType = {
//   text: string;
//   link: string;
// };

// type propType =
//   | {
//       triggerName: string;
//       content: contentType[];
//     }[]
//   | null;

const Navbar: React.FC = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent className="flex shrink-0 flex-col p-4">
              <Link href={"/test"}>
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
                <Link href={"/test"}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>You</NavigationMenuTrigger>
            <NavigationMenuContent className="flex shrink-0 flex-col p-4">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link href={"/test"}>Profile</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link href={"/test"}>Cart</Link>
              </NavigationMenuLink>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link href={"/test"}>Previous Orders</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
