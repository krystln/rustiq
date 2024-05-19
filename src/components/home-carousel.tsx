"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  DotButtons,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const HomeCarousel = () => {
  return (
    <Carousel
      className="h-fit w-1/3 rounded-sm"
      opts={{
        loop: true,
        align: "center",
        // duration: 500,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnHover: true,
        }),
      ]}
    >
      <CarouselContent className="w-full text-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="h-full w-full p-1">
              <Image
                width={200}
                height={20}
                className="h-[450px] w-full rounded-sm border object-contain"
                src={`/products/${index + 1}/1.webp`}
                alt="Loading..."
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 top-full rounded-sm" />
      <CarouselNext className="left-10 top-full rounded-sm" />
      <DotButtons className="absolute bottom-4 flex w-full items-end justify-center gap-2" />
    </Carousel>
  );
};

export default HomeCarousel;
