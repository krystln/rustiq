"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import type { Session } from "next-auth";
import {
  BadgePercentIcon,
  HomeIcon,
  LibraryIcon,
  MessageCircleQuestionIcon,
  PaletteIcon,
  PencilRulerIcon,
  ShapesIcon,
} from "lucide-react";
import { Login, NavMenuContent, Profile } from "./nav-bar-content";

const Navbar: React.FC<{ session: Session | null }> = ({ session }) => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navMenu.map((menu, index) => {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="flex min-w-64 flex-wrap p-2">
                  {menu.submenu.map((submenu, index) => (
                    <NavMenuContent menuContent={submenu} key={index} />
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>You</NavigationMenuTrigger>
            <NavigationMenuContent className="flex min-w-64 max-w-64 flex-col items-center justify-center text-nowrap p-4">
              {!session ? <Login /> : <Profile data={session.user!} />}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
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
        Icon: HomeIcon,
      },
      {
        link: "/",
        title: "By Type",
        subtitle: "Sofas, Beds, Tables, etc.",
        Icon: ShapesIcon,
      },
      {
        link: "/",
        title: "Special Collections",
        subtitle: "Handpicked for you!",
        Icon: LibraryIcon,
      },
      {
        link: "/",
        title: "Deals",
        subtitle: "Discounts, Offers, and more!",
        Icon: BadgePercentIcon,
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
        Icon: PencilRulerIcon,
      },
      {
        link: "/",
        title: "Custom Designs",
        subtitle: "Get what you want!",
        Icon: PaletteIcon,
      },
      {
        link: "/",
        title: "Contact Us",
        subtitle: "Get in touch with us!",
        Icon: MessageCircleQuestionIcon,
      },
    ],
  },
];

export default Navbar;
