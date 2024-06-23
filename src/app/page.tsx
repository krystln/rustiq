import CTA from "@/components/cta";
import HomeCarousel from "@/components/home-carousel";

export default async function Home() {
  return (
    <main className="h-full">
      <div className="flex h-[650px] w-full items-start justify-start gap-8 px-20 py-12">
        <HomeCarousel className="shrink-0" />
        <div className="p-10">
          <h1 className="flex flex-col gap-2 font-['Inika'] text-5xl">
            Style your Home the way
            <span className="flex w-fit">
              <span className="group">
                <div className="absolute -z-10 inline h-16 w-24 rotate-12 pl-1 group-hover:bg-green-400" />
                You
              </span>
              <span className="group ml-2">
                <div className="absolute -z-10 inline h-14 w-24 -rotate-45 pr-1 group-hover:bg-[rgb(249,115,22)]" />
                Like!
              </span>
            </span>
          </h1>
          <p className="mt-3 w-4/5 font-sans text-lg">
            Checkout our most popular selection or find hidden gem from our wide
            and currated selection perfect for you.
          </p>
          <CTA />
        </div>
      </div>
    </main>
  );
}

// import TurnCard from "@/components/turning-card";
// import {
//   BadgeDollarSignIcon,
//   GemIcon,
//   ShoppingBasketIcon,
//   ZapIcon,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// <div className="m-1.5 grid h-full w-full grow-0 grid-cols-3 grid-rows-3 p-0">
//  {/* Top Left */}
//  <div className="-translate-x-2 -translate-y-2 -rotate-2 transform-gpu p-4">
//    <TurnCard direction="vertical" perspective={500}>
//      {/* Top-Left-Front */}
//      <div className="flex h-full w-full flex-col items-center justify-center rounded-sm border text-center text-3xl font-thin">
//        Add To Cart
//        <span className="block font-bold">
//          ~ &#x1d56d;&#x1d591;&#x1d58e;&#x1d598;&#x1d598; ~
//        </span>
//      </div>
//
//      {/* Top-Left-Back */}
//      <div className="h-full w-full">
//        <Link
//          href="/cart"
//          className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-sm border p-4 text-center text-xl font-thin"
//        >
//          <ShoppingBasketIcon size={50} />
//          <span className="underline-offset-8 hover:underline">
//            Go To Cart
//          </span>
//        </Link>
//      </div>
//    </TurnCard>
//  </div>
//
//  {/* Top Center */}
//  <div className="border-r-2 border-black pb-6 pl-2 pr-6">
//    <TurnCard direction="horizontal" perspective={500}>
//      <div className="h-full w-full bg-red-500">Front</div>
//      <div className="h-full w-full bg-yellow-500">Back</div>
//    </TurnCard>
//  </div>
//
//  {/* Right */}
//  <div className="row-span-3 p-6 pt-4">
//    <TurnCard direction="horizontal" perspective={235}>
//      <div className="h-full w-full bg-red-500">Front</div>
//      <div className="h-full w-full bg-yellow-500">Back</div>
//    </TurnCard>
//  </div>
//
//  {/* Bottom */}
//  <div className="col-span-2 row-span-2 border-l-2 border-t-2 border-black p-4 pl-8 pr-0">
//    <TurnCard
//      direction="vertical"
//      perspective={286}
//      className="-translate-x-2 translate-y-2 rotate-1 transform-gpu"
//    >
//      {/* Bottom-Front */}
//      <div className="relative h-full w-full">
//        <Image src="/products/6/1.webp" alt="not found" fill />
//        <div className="absolute left-2 top-2 font-serif text-xl font-bold">
//          A Must Have!! Where style meets function
//        </div>
//      </div>
//
//      {/* Bottom-Back */}
//      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
//        <Link
//          href=""
//          className="flex h-full w-full flex-col items-center justify-center rounded-sm border font-bold text-green-600 hover:bg-[#efefef]"
//        >
//          <BadgeDollarSignIcon size={50} className="" />
//          Find Our Best Deals
//        </Link>
//        <Link
//          href=""
//          className="flex h-full w-full flex-col items-center justify-center rounded-sm border font-bold text-yellow-600 hover:bg-[#efefef]"
//        >
//          <ZapIcon size={50} />
//          Flash Sales
//        </Link>
//        <Link
//          href=""
//          className="col-span-2 flex h-full w-full items-center justify-center rounded-sm border font-bold text-red-600 hover:bg-[#efefef]"
//        >
//          <GemIcon size={50} />
//          Special Collections
//        </Link>
//      </div>
//    </TurnCard>
//  </div>
//  </div>
