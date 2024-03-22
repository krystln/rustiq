// type Product = any;

async function fetcher(id: number) {
  const res = await fetch(`http://localhost:3000/api/v0.1/products/${id}`);

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  console.log(id);
  return await res.json();
}

const ProductCard = async ({ id }: { id: number }) => {
  const product = await fetcher(id);
  return <div>{JSON.stringify(product)}</div>;
};

export default ProductCard;
