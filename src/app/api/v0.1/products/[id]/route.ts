// const invalideNumbers = 100;

const GET = async (req: Request, { params }: { params: { id: number } }) => {
  try {
    const { id } = params;

    console.log(Number(id));

    if (Number(id) === 100) {
      console.log("Product not found");
      throw new Error("Product not found");
    }
    return new Response(
      JSON.stringify({
        id: id,
        name: `Product ${id}`,
      }),
      { status: 200 },
    );
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 404,
    });
  }
};

export { GET };
