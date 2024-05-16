"use server";

import { cookies } from "next/headers";

export async function getData(key: string) {
  const data = cookies().get(key)?.value ?? null;
  return data;
}

export async function deleteCookies(key: string) {
  try {
    cookies().delete(key);
  } catch (e) {
    console.error(e);
  }
}

export async function createCookies(key: string, value: string) {
  try {
    cookies().set(key, value);
  } catch (e) {
    console.error(e);
  }
}
