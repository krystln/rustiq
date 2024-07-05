"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Variants: React.FC<{ colors?: string[] }> = ({ colors }) => {
  const [variant, setVariant] = React.useState("#00ff00");
  return (
    <div className="flex gap-1">
      {colors?.map((color) => (
        <div
          key={color}
          className={cn(
            "relative h-6 w-6 cursor-pointer rounded-full border-2",
            variant === color ? "border-black" : "border-transparent",
          )}
          onClick={() => setVariant(color)}
        >
          <div
            className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  );
};

export default Variants;
