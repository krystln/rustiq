"use server";

import { cookies } from "next/headers";

async function deleteCookies() {
  cookies().delete("currentUser");
  console.log("Cookies deleted");
}

export { deleteCookies };
