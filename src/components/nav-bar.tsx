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

import { useEffect, useState } from "react";
import { getUserData } from "@/lib/cookie-handling";
import { Button } from "./ui/button";
import Image from "next/image";
import GoogleIcon from "./utility";

const Navbar: React.FC = () => {
  // const user = cookies().get("currentUser") ?? null;

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetcher();
  }, []);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navMenu.map((menu) => {
            return (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="flex min-w-64 flex-wrap p-2">
                  {menu.submenu.map((submenu) => (
                    <Link
                      href={submenu.link}
                      key={submenu.title}
                      className="w-full"
                    >
                      <Button
                        variant="ghost"
                        className="flex h-fit w-full items-center justify-start gap-4"
                      >
                        <GoogleIcon className="scale-125">
                          {submenu.icon}
                        </GoogleIcon>
                        <div className="flex flex-col items-start gap-0">
                          {submenu.title}
                          <span className="text-wrap text-left text-zinc-400">
                            {submenu.subtitle}
                          </span>
                        </div>
                      </Button>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>You</NavigationMenuTrigger>
            <NavigationMenuContent className="flex min-w-64 max-w-64 flex-col items-center justify-center text-nowrap p-4">
              {!user ? <Login /> : <Profile data={JSON.parse(user)} />}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

const Login = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={"/login"} className="w-full">
        <Button
          variant="ghost"
          className="text-md flex w-full justify-start gap-4 py-8"
        >
          <GoogleIcon className="scale-125">login</GoogleIcon>
          <div className="flex flex-col items-start">
            <h1 className="text-lg">Login</h1>
            <span className="text-sm text-zinc-500">Get back to things!</span>
          </div>
        </Button>{" "}
      </Link>
      <Link href={"/login?register"} className="w-full">
        <Button
          variant="ghost"
          className="text-md flex w-full justify-start gap-4 py-8"
        >
          <GoogleIcon className="scale-125">person_add</GoogleIcon>
          <div className="flex flex-col items-start">
            <h1 className="text-lg">Register</h1>
            <span className="text-sm text-zinc-500">Add a new adventure!</span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

const Profile = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <Link
        href="/profile"
        className="group flex items-center justify-center gap-2"
      >
        <Image
          src={data.picture}
          alt="profile"
          height={50}
          width={50}
          className="rounded-full border border-black group-hover:border-2"
        ></Image>
        <div className="flex flex-col gap-0">
          <h1 className="group-hover:font-semibold">{data.name}</h1>
          <span className="text-xs text-zinc-400">{data.email}</span>
        </div>
      </Link>
      <div className="flex w-full flex-wrap">
        <Button variant="ghost" className="w-1/2">
          <Link href={"/cart"} className="flex items-center gap-2">
            <GoogleIcon className="scale-125">shopping_cart</GoogleIcon>
            <div>Cart</div>
          </Link>
        </Button>
        <Button variant="ghost" className="w-1/2">
          <Link href={"/cart"} className="flex items-center gap-2">
            <GoogleIcon className="scale-125">package_2</GoogleIcon>
            <div>Orders</div>
          </Link>
        </Button>
        <Button variant="destructive" className="mt-2 w-full">
          <Link href={"/cart"} className="flex items-center gap-2">
            <GoogleIcon className="scale-125">logout</GoogleIcon>
            <div>Logout</div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

const navMenu = [
  {
    title: "Shop",
    submenu: [
      {
        link: "/",
        title: "By Room",
        subtitle: "Living Room, Bedroom, Kitchen",
        icon: "home",
      },
      {
        link: "/",
        title: "By Type",
        subtitle: "Sofas, Beds, Tables, etc.",
        icon: "category",
      },
      {
        link: "/",
        title: "Special Collections",
        subtitle: "Handpicked for you!",
        icon: "collections",
      },
      {
        link: "/",
        title: "Deals",
        subtitle: "Discounts, Offers, and more!",
        icon: "local_offer",
      },
    ],
  },
  {
    title: "Services",
    submenu: [
      {
        link: "/",
        title: "Interior Design",
        subtitle: "Get your dream home!",
        icon: "design_services",
      },
      {
        link: "/",
        title: "Custom Designs",
        subtitle: "Get what you want!",
        icon: "palette",
      },
      {
        link: "/",
        title: "Contact Us",
        subtitle: "Get in touch with us!",
        icon: "contact_support",
      },
    ],
  },
];

export default Navbar;
