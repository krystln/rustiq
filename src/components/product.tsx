import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import GoogleIcon from "./utility";
import { getProductByParameter } from "@/supabse/handler";
import { Heart } from "./buttons";

const ProductCard = async ({ id }: { id: number }) => {
  let product: null | { id: number; name: string } = null;
  let fetchError: null | { type: string; message: string } = null;

  try {
    const data = await fetch(
      `${process.env.BASE_URL}/api/v0.1/products?id=${id}`,
    ).then((res) => res.json());

    if (data[1]) {
      throw new Error(data[1].type, data[1].message);
    }

    product = data[0];
  } catch (error: any) {
    fetchError = error;
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
        {product ? <div>{product.name}</div> : <div>{fetchError?.message}</div>}
        <Button variant="outline" className="px-2">
          <GoogleIcon>shopping_cart</GoogleIcon>
        </Button>
      </CardTitle>
      <CardContent className="scrollbar-none flex gap-2 overflow-x-auto p-0">
        {["Kitchen", "simple", "unique", "test4"].map((tag, index) => {
          return (
            <Badge key={index} variant="default">
              {tag}
            </Badge>
          );
        })}
      </CardContent>
    </Card>
  );
};

export const Product = async ({ name }: { name: string }) => {
  const { status, data } = await getProductByParameter("name", name);

  const product = data![0];

  return (
    <>
      <div className="mt-10 flex gap-4">
        <Image
          src="http://via.placeholder.com/500x500"
          alt=""
          width={500}
          height={500}
        />
        <div>
          <h1 className="text-4xl font-extrabold uppercase">{product.name}</h1>
          <Heart rating={2} />
          <span>
            {product.filter_by_room?.map((room, index) => {
              return <Badge key={index}>{room}</Badge>;
            })}
            {product.filter_by_type?.map((room, index) => {
              return <Badge key={index}>{room}</Badge>;
            })}
          </span>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
