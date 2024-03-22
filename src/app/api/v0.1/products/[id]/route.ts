const GET = async (req: Request, { params }: { params: { id: number } }) => {
  try {
    const { id } = params;

    console.log("id", id);
    return new Response(
      JSON.stringify({
        id: id,
        name: `Product ${id}`,
      }),
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify(e), { status: 500 });
  }
};

export { GET };
