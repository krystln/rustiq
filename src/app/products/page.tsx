"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useSearchParams();
  const id = params.get("id");

  return <div>Page for {id}</div>;
};

export default Page;
