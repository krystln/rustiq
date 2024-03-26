"use client";

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

import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useEffect, useState } from "react";
import { getUserData } from "@/lib/cookie-handling";

const Navbar: React.FC = () => {
  // const user = cookies().get("currentUser") ?? null;

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
          {navMenu.map((menu) => {
            return (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="flex w-24 flex-col p-4">
                  {menu.sub.map((sub) => (
                    <NavigationMenuLink
                      key={sub.title}
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href={sub.link}>{sub.title}</Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>You</NavigationMenuTrigger>
            <NavigationMenuContent className="flex w-48 flex-col text-nowrap p-4">
              {!user ? (
                <div>Log in</div>
              ) : (
                <>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/profile">Profile</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/logout">Logout</Link>
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

const navMenu = [
  {
    title: "Everything",
    sub: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Products",
        link: "/products",
      },
    ],
  },
];

export default Navbar;
