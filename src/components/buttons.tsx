"use client";
import { Button } from "@/components/ui/button";
import { createCookies, deleteCookies } from "@/lib/cookie-handling";
import { useState } from "react";

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

export const Heart = ({ rating }: { rating: number }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <Button
        variant="link"
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? "❤️" : "♡"}
      </Button>
      <span>{isLiked ? rating + 1 : rating}</span>
    </div>
  );
};

export default Buttons;
