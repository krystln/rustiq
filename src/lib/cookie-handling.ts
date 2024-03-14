"use server";

import { cookies } from "next/headers";

export async function getUserData() {
  const user = cookies().get("currentUser") ?? null;
  return user;
}
