"use server";

import Navbar from "./nav-bar";
import Searchbar from "../search-bar";
import Link from "next/link";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-center gap-4 p-2">
      <Link href="/" className="font-['Inika'] text-2xl font-bold">
        <div className="group inline w-fit">
          <span className="absolute -z-10 h-10 w-10 rotate-12 group-hover:bg-orange-500" />
          Ru
        </div>
        <div className="group inline w-fit">
          <span className="absolute -z-10 h-10 w-10 -rotate-12 group-hover:bg-green-400" />
          st
        </div>
        <div className="group inline w-fit">
          <span className="absolute -z-10 h-10 w-10 rotate-12 group-hover:bg-pink-400" />
          iQ
        </div>
      </Link>
      <Navbar session={session} />
      <Searchbar />
    </div>
  );
};

export default Header;
