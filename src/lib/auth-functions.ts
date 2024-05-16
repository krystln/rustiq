"use server";

import { signIn, signOut } from "@/auth";

const logOut = async () => {
  await signOut();
};

const logIn = async () => {
  await signIn();
};

export { logIn, logOut };
