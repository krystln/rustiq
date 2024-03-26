"use client";
import { Button } from "@/components/ui/button";
import { createCookies, deleteCookies } from "@/lib/cookie-handling";

const Buttons = () => {
  return (
    <div>
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
    </div>
  );
};

export default Buttons;
