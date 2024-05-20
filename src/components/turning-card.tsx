"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface TurnCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  direction?: "vertical" | "horizontal";
  children: [React.ReactNode, React.ReactNode];
  perspective?: number;
}
const TurnCard: React.FC<TurnCardProps> = ({
  className,
  direction,
  children,
  perspective,
  ...props
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={cn("relative h-full w-full", className)}
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
                    ? `rotate3d(1, 0, 0, 90deg) perspective(${perspective ?? 100}px)`
                    : `rotate3d(0, 1, 0, 90deg) perspective(${perspective ?? 100}px)`,
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
                    ? `rotate3d(1, 0, 0, -90deg) perspective(${perspective ?? 100}px)`
                    : `rotate3d(0, 1, 0, -90deg) perspective(${perspective ?? 100}px)`,
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
