import ProductCard from "@/components/product-card";
import Buttons from "@/components/buttons";

export default function Home() {
  return (
    <main>
      <Buttons />
      <ProductCard id={1} />
    </main>
  );
}
