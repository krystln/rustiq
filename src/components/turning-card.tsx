"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface TurnCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  direction?: "vertical" | "horizontal";
  children: [React.ReactNode, React.ReactNode];
}
const TurnCard: React.FC<TurnCardProps> = ({
  className,
  direction,
  children,
  ...props
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={cn("relative", className)}
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={
          isHover
            ? {
                transform:
                  direction === "vertical"
                    ? "rotate3d(1, 0, 0, 90deg) perspective(100px)"
                    : "rotate3d(0, 1, 0, 90deg) perspective(100px)",
              }
            : {}
        }
        className={cn(
          "h-full w-full transform-gpu overflow-clip transition-all delay-75",
          direction === "vertical" ? "origin-top" : "origin-right",
        )}
      >
        {children[0]}
      </div>
      <div
        style={
          !isHover
            ? {
                transform:
                  direction === "vertical"
                    ? "rotate3d(1, 0, 0, -90deg) perspective(100px)"
                    : "rotate3d(0, 1, 0, -90deg) perspective(100px)",
              }
            : {}
        }
        className={cn(
          "absolute left-0 top-0 h-full w-full transform-gpu overflow-clip transition-all delay-75",
          direction === "vertical" ? "origin-bottom" : "origin-left",
        )}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default TurnCard;
