import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Link href="/login">Login</Link>
      <Link href="/products/test">Products</Link>
      <Link href="/cart">Cart</Link>
      <div className="flex flex-wrap items-center justify-center gap-12">
        <div>Products not found</div>
      </div>
    </main>
  );
}
