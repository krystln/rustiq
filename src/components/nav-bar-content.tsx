import Link from "next/link";
import { Button } from "./ui/button";
import {
  LogInIcon,
  LogOutIcon,
  LucideIcon,
  PackageIcon,
  ShoppingCartIcon,
  UserPlusIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { logOut } from "@/lib/auth-functions";
import type { User } from "next-auth";

const Login: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {[
        {
          title: "Login",
          subtitle: "Get back to things!",
          Icon: LogInIcon,
          link: "/login",
        },
        {
          title: "Register",
          subtitle: "Add a new adventure!",
          Icon: UserPlusIcon,
          link: "/login?register",
        },
      ].map((menu) => (
        <NavMenuContent menuContent={menu} />
      ))}
    </div>
  );
};

const Profile: React.FC<{ data: User }> = ({ data }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <Link
        href="/profile"
        className="flex items-center justify-center gap-2 rounded-md p-2 hover:bg-[#efefef]"
      >
        <Avatar>
          <AvatarImage src={data.image ?? undefined} />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0">
          <h1 className="">{data.name ?? ""}</h1>
          <span className="text-xs text-zinc-400">{data.email ?? ""}</span>
        </div>
      </Link>
      <div className="flex w-full flex-wrap">
        <Button variant="ghost" className="w-1/2 hover:bg-[#efefef]">
          <Link
            href={"/cart"}
            className="flex h-full w-full items-center justify-center gap-2 rounded-md"
          >
            <ShoppingCartIcon size={25} />
            <div>Cart</div>
          </Link>
        </Button>
        <Button variant="ghost" className="w-1/2 hover:bg-[#efefef]">
          <Link
            href={"/cart"}
            className="flex h-full w-full items-center justify-center gap-2 rounded-md"
          >
            <PackageIcon size={25} />
            <div>Orders</div>
          </Link>
        </Button>
        <Button
          variant="destructive"
          className="mt-2 w-full"
          onClick={() => logOut()}
        >
          <LogOutIcon size={25} />
          <div>Logout</div>
        </Button>
      </div>
    </div>
  );
};

const NavMenuContent: React.FC<{
  menuContent: {
    title: string;
    link: string;
    Icon: LucideIcon;
    subtitle: string;
  };
}> = ({ menuContent: { title, link, Icon, subtitle } }) => {
  return (
    <>
      <Link href={link} key={title} className="w-full">
        <Button
          variant="ghost"
          className="flex h-fit w-full items-center justify-start gap-4"
        >
          <Icon size={25} />
          <div className="flex flex-col items-start gap-0">
            {title}
            <span className="text-wrap text-left text-zinc-400">
              {subtitle}
            </span>
          </div>
        </Button>
      </Link>
    </>
  );
};

export { Login, Profile, NavMenuContent };
