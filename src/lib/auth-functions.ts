"use server";

import { createUser } from "@/supabse/handler";
import { cookies } from "next/headers";

const fetchUserInfo = async (access_token: string) => {
  // console.log("Fetching user data");
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

  // console.log("Cookies set with user data : ", JSON.stringify(await userData));
  const error = await createUser({
    userData: {
      name: userData.name,
      email: userData.email,
      image: userData.picture,
    },
  });
  cookies().set("user", JSON.stringify(await userData));
  if (error === null) console.log("Unable to save user data to database");
};

export default fetchUserInfo;
