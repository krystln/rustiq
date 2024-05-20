import HomeCarousel from "@/components/home-carousel";
import TurnCard from "@/components/turning-card";

export default async function Home() {
  return (
    <main className="h-full">
      <div className="flex h-[450px] w-full justify-start px-20 py-12">
        <HomeCarousel />
        <div className="m-1.5 grid h-full w-[500px] grid-cols-2 grid-rows-2 gap-4 bg-[#efefef] p-4">
          <TurnCard className="" direction="vertical" perspective={500}>
            <div className="h-full w-full bg-red-500">Front</div>
            <div className="h-full w-full bg-yellow-500">Back</div>
          </TurnCard>
          <TurnCard className="" direction="horizontal">
            <div className="h-full w-full bg-red-500">Front</div>
            <div className="h-full w-full bg-yellow-500">Back</div>
          </TurnCard>
          <TurnCard className="" direction="horizontal">
            <div className="h-full w-full bg-red-500">Front</div>
            <div className="h-full w-full bg-yellow-500">Back</div>
          </TurnCard>
          <TurnCard className="" direction="vertical">
            <div className="h-full w-full bg-red-500">Front</div>
            <div className="h-full w-full bg-yellow-500">Back</div>
          </TurnCard>
        </div>
      </div>
    </main>
  );
}
