"use client";

import fetchUserInfo from "@/lib/auth-functions";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const hash = window.location.hash;
    const access_token = hash.split("&").map((item) => item.split("="))[0][1];

    if (access_token) {
      fetchUserInfo(access_token);
      window.location.href = "/";
    }
  }, []);

  return <div>Please Wait Redirecting</div>;
};

export default Page;
