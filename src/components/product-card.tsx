import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { error } from "console";

const ProductCard = async ({ id }: { id: number }) => {
  let product: null | { id: number; name: string } = null;
  let fetchError: null | { type: string; message: string } = null;

  try {
    const [data, error] = await fetch(
      `http://localhost:3000/api/v0.1/products?id=${id}`,
    ).then((res) => res.json());

    if (error) {
      fetchError = error;
      throw new Error(error.message);
    }

    product = data;
  } catch (e) {
    console.error(e);
  }

  return (
    <Card className="h-98 w-56 rounded-sm p-6">
      <Image
        src="http://via.placeholder.com/180x210"
        alt="placeholder"
        width={180}
        height={210}
      />
      <CardTitle className="flex items-center justify-between py-2 text-xl">
        <div>{product?.name ?? fetchError?.message}</div>
        <Button variant="outline" className="px-2">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
      </CardTitle>
      <CardContent className="flex flex-wrap gap-2 p-0">
        {["test", "test2", "test3", "test4"].map((tag: string) => (
          <Badge key={tag} className="">
            {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
