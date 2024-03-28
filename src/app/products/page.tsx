"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  const params = useSearchParams();
  const id = params.get("id");

  return <div>Page for {id}</div>;
};

const Over = () => {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
};

export default Over;
