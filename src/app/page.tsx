"use client";

import Header from "@/components/header";
import { createCookies, deleteCookies } from "./test";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Header />
      <Button
        variant="link"
        onClick={() => {
          console.log("Deleting cookies");
          deleteCookies();
        }}
      >
        Delete Cookies
      </Button>

      <Button
        variant="link"
        onClick={() => {
          console.log("Creating cookies");
          createCookies();
        }}
      >
        Create Cookies
      </Button>
    </main>
  );
}
