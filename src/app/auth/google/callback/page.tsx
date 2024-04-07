"use client";

import fetchUserInfo from "@/lib/auth-functions";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const accessParameters = window.location.hash
      .split("&")
      .map((item) => item.split("="));

    if (accessParameters === null || accessParameters.length === undefined) {
      alert("Error: No access token found");
      window.location.href = "/";
    }

    const RustiqAccess = {
      access_token: accessParameters[0][1],
      token_type: accessParameters[1][1],
      expires_on: new Date().getTime() + accessParameters[2][1],
      scope: accessParameters[3][1],
    };

    localStorage.setItem("RustiqAccess", JSON.stringify(RustiqAccess));
    console.log(JSON.stringify(RustiqAccess));
    window.location.href = "/";
  }, []);

  return (
    <div className="mt-52 flex h-full w-full items-center justify-center text-center font-mono text-2xl font-bold uppercase text-stone-800">
      Please Wait Redirecting
      {<span className="animate-pulse">.</span>}
      {<span className="animate-pulse delay-150">.</span>}
      {<span className="animate-pulse delay-300">.</span>}
    </div>
  );
};

export default Page;
