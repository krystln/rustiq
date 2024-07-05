import { createClient } from "@/supabase/client";
import type { NextRequest } from "next/server";
import type { Product } from "@/supabase/schema";

const GET = async (
  req: NextRequest,
  { params }: { params: { product_id: string } },
) => {
  // const searchParams = req.nextUrl.searchParams;
  const id = Number(params.product_id);

  console.log(id);

  const supabase = createClient();
  try {
    if (isNaN(id)) {
      throw new TypeError("Invalid product ID");
    }
    if (Number(id) > 20) {
      throw new RangeError("Product not found");
    }

    const { data, error } = await supabase
      .from("Products")
      .select()
      .eq("id", id)
      .single();

    console.log(data);
    if (!data) {
      console.error(error);
      throw new RangeError("Product not found");
    }

    return new Response(JSON.stringify([data, null]), {
      status: 200,
    });
  } catch (e: any) {
    // console.log(e);
    if (e instanceof TypeError || e instanceof RangeError) {
      return new Response(
        JSON.stringify([null, { type: e.name, message: e.message }]),
        { status: 400 },
      );
    } else {
      return new Response(JSON.stringify([null, { error: e.message }]), {
        status: 500,
      });
    }
  }
};

export { GET };
