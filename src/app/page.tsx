import HomeCarousel from "@/components/home-carousel";

export default async function Home() {
  return (
    <main className="h-full">
      <div className="flex h-[450px] w-full justify-start px-20 py-12">
        <HomeCarousel />
      </div>
    </main>
  );
}
