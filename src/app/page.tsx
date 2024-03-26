import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import Buttons from "./buttons";

export default function Home() {
  return (
    <main>
      <Header />
      <Buttons />
      <ProductCard id={10} />
    </main>
  );
}
