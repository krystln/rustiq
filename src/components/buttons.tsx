"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
