"use server";

import { cookies } from "next/headers";

const fetchUserInfo = async (access_token: string) => {
  const userData = await fetch(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });

  cookies().set("user", JSON.stringify(userData));
};

export default fetchUserInfo;
