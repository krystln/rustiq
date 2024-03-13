"use client";

import Header from "@/components/header";
import { deleteCookies } from "./test";

export default function Home() {
  return (
    <main>
      <Header />
      <button
        onClick={() => {
          console.log("Deleting cookies");
          deleteCookies();
        }}
      >
        Clear Cookies
      </button>
    </main>
  );
}
