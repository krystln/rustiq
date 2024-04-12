import { cookies } from "next/headers";
import React from "react";

const Page = () => {
  const userData = cookies().get("user")?.value;
  return (
    <>
      <div>{userData}</div>
    </>
  );
};

export default Page;
