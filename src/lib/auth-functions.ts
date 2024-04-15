"use server";

import { createUser, getUser } from "@/supabse/handler";
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
      role: "user",
    },
  });

  const user = await getUser(userData.email);

  cookies().set("user", JSON.stringify(user.data![0]));
  if (error === null) console.log("Unable to save user data to database");
};

export default fetchUserInfo;
