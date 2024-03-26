"use server";

import { cookies } from "next/headers";

export async function getUserData() {
  const user = cookies().get("currentUser") ?? null;
  return user;
}

export async function deleteCookies() {
  try {
    cookies().delete("currentUser");
    console.log("Cookies deleted");
  } catch (e) {
    console.error(e);
  }
}

export async function createCookies() {
  try {
    cookies().set("currentUser", "test");
    console.log("Cookies created");
  } catch (e) {
    console.error(e);
  }
}
