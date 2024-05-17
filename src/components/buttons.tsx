"use client";
import { Button } from "@/components/ui/button";
import { addData } from "@/firebase/firestore/handler";
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

export const DBTest = () => {
  async function handleSubmit() {
    alert("Adding data to Firestore");
    const response = await addData("user", "test", { name: "John Doogly" });
    alert(response ? "Data added successfully" : "Failed to add data");
  }

  return (
    <div>
      <Button onClick={handleSubmit}>Click me</Button>
    </div>
  );
};
