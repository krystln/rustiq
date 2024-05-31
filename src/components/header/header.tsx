"use server";

import Navbar from "./nav-bar";
import Searchbar from "../search-bar";
import Link from "next/link";
import { Button } from "../ui/button";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-center gap-4 p-2">
      <Link href="/">
        <Button variant="link">
          <h1 className="text-xl font-bold">Rustiq</h1>
        </Button>
      </Link>
      <Navbar session={session} />
      <Searchbar />
    </div>
  );
};

export default Header;
