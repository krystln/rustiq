import type { NextRequest } from "next/server";

const GET = (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = Number(searchParams.get("id"));

  try {
    if (isNaN(id)) {
      throw new TypeError("Invalid product ID");
    }
    if (Number(id) === 100) {
      throw new RangeError("Product not found");
    }

    return new Response(
      JSON.stringify([{ id: Number(id), name: `Product ${id}` }, null]),
      { status: 200 },
    );
  } catch (e: any) {
    // console.log(e);
    if (e instanceof TypeError || e instanceof RangeError) {
      return new Response(
        JSON.stringify([null, { type: e.name, message: e.message }]),
        {
          status: 400,
        },
      );
    } else {
      return new Response(JSON.stringify([null, { error: e.message }]), {
        status: 500,
      });
    }
  }
};

export { GET };
