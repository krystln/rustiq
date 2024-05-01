import ProductCard from "@/components/product";
import Buttons from "@/components/buttons";
import Link from "next/link";
import { getProducts } from "@/supabse/handler";

export default async function Home() {
  const { status, data } = await getProducts();

  return (
    <main>
      <Buttons />
      <Link href="/login">Login</Link>
      <Link href="/products/test">Products</Link>
      <Link href="/cart">Cart</Link>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {status === 200 ? (
          data.map((product, index) => {
            return <ProductCard key={index} id={product.id} />;
          })
        ) : (
          <div>Products not found</div>
        )}
      </div>
    </main>
  );
}
