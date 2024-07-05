import { createClient } from "@/supabase/client";
import type { NextRequest } from "next/server";
import type { Product } from "@/supabase/schema";

const GET = async (req: NextRequest) => {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from("Products").select();
    if (!data) throw error;

    return new Response(JSON.stringify([data, null] as [Product[], any]), {
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
