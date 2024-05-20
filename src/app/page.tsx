import HomeCarousel from "@/components/home-carousel";
import TurnCard from "@/components/turning-card";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <main className="h-full">
      <div className="flex h-[650px] w-full items-start justify-start gap-8 px-20 py-12">
        <HomeCarousel className="shrink-0" />
        {/* <Separator
          className="w-[2px] scale-90 bg-gray-700"
          orientation="vertical"
        /> */}
        <div className="m-1.5 grid h-full w-full grow-0 grid-cols-3 grid-rows-3 p-0">
          <div className="-translate-x-2 -translate-y-2 -rotate-2 transform-gpu p-4">
            <TurnCard direction="vertical" perspective={500}>
              <div className="h-full w-full bg-red-500">Front</div>
              <div className="h-full w-full bg-yellow-500">Back</div>
            </TurnCard>
          </div>
          <div className="border-r-2 border-black pb-6 pl-2 pr-6">
            <TurnCard direction="horizontal" perspective={500}>
              <div className="h-full w-full bg-red-500">Front</div>
              <div className="h-full w-full bg-yellow-500">Back</div>
            </TurnCard>
          </div>
          <div className="row-span-3 p-6 pt-4">
            <TurnCard direction="horizontal" perspective={235}>
              <div className="h-full w-full bg-red-500">Front</div>
              <div className="h-full w-full bg-yellow-500">Back</div>
            </TurnCard>
          </div>
          <div className="col-span-2 row-span-2 border-l-2 border-t-2 border-black p-4 pl-8 pr-0">
            <TurnCard
              direction="vertical"
              perspective={286}
              className="-translate-x-2 translate-y-2 rotate-1 transform-gpu"
            >
              <div className="h-full w-full bg-red-500">Front</div>
              <div className="h-full w-full bg-yellow-500">Back</div>
            </TurnCard>
          </div>
        </div>
      </div>
    </main>
  );
}
