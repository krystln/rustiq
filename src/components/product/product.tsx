import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/utility";

const ProductCard = async ({ id }: { id: number }) => {
  return (
    <Card className="h-98 w-60 rounded-sm p-6">
      <Image
        src="http://via.placeholder.com/180x210"
        alt="placeholder"
        width={200}
        height={210}
      />
      <CardTitle className="flex items-center justify-between py-2 text-xl">
        <Button variant="outline" className="px-2">
          <GoogleIcon>shopping_cart</GoogleIcon>
        </Button>
      </CardTitle>
      <CardContent className="scrollbar-none flex gap-2 overflow-x-auto p-0"></CardContent>
    </Card>
  );
};

export const Product = async ({ name }: { name: string }) => {
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
          <h1 className="text-4xl font-extrabold uppercase"></h1>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
