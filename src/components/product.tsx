import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import GoogleIcon from "./utility";
import { getProductByParameter } from "@/supabse/handler";
import { Heart } from "./buttons";
import Link from "next/link";

const ProductCard = async ({ id }: { id: number }) => {
  const { status, data } = await getProductByParameter("id", id);
  if (status === 500) {
    return <div>Product not found</div>;
  }
  return (
    <Card className="h-98 w-60 rounded-sm p-6">
      <Image
        src="http://via.placeholder.com/180x210"
        alt="placeholder"
        width={200}
        height={210}
      />
      <CardTitle className="flex items-center justify-between py-2 text-xl">
        <Link href={"/products/" + data.name.replace(/ /g, "-")}>
          {data ? <div>{data.name}</div> : <div>{status}</div>}
        </Link>
        <Button variant="outline" className="px-2">
          <GoogleIcon>shopping_cart</GoogleIcon>
        </Button>
      </CardTitle>
      <CardContent className="scrollbar-none flex gap-2 overflow-x-auto p-0">
        {data.filter_by_room!.map((tag, index) => {
          return (
            <Badge key={index} variant="default" className="text-nowrap">
              {tag}
            </Badge>
          );
        })}
        {data.filter_by_type!.map((tag, index) => {
          return (
            <Badge key={index} variant="default" className="w-fit text-nowrap">
              {tag}
            </Badge>
          );
        })}
      </CardContent>
    </Card>
  );
};

export const Product = async ({ name }: { name: string }) => {
  try {
    const { status, data } = await getProductByParameter("name", name);

    if (status === 500) {
      throw new Error("Product not found");
    }

    const product = data;
    return (
      <>
        <div className="mt-10 flex flex-col gap-4">
          <Image
            src="http://via.placeholder.com/500x500"
            alt=""
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-4xl font-extrabold uppercase">
              {product.name}
            </h1>
            <Heart rating={product.review} />
            <span className="flex items-center gap-1">
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
  } catch (error: any) {
    return <div>{error.message}</div>;
  }
};

export default ProductCard;
