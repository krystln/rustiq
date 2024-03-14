"use server";

import { cookies } from "next/headers";

async function deleteCookies() {
  cookies().delete("currentUser");
  console.log("Cookies deleted");
}

async function createCookies() {
  cookies().set("currentUser", "test");
  console.log("Cookies created");
}

export { deleteCookies, createCookies };
