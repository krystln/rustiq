import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
) {
  let timer: NodeJS.Timeout;
  return [
    (...args: Params) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    },
    () => clearTimeout(timer),
  ];
}
