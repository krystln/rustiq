import ProductCard from "@/components/product";
import Buttons from "@/components/buttons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Buttons />
      <Link href="/login">Login</Link>
      <Link href="/products/asd">Products</Link>
      <ProductCard id={1} />
    </main>
  );
}
