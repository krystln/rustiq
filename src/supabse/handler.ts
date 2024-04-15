"use server";

import { supabase } from "./client";

interface Insert {
  id?: number;
  created_at?: string;
  name?: string;
  email?: string;
  image: string;
}

export const createUser = async ({ userData }: { userData: Insert }) => {
  const { error } = await supabase.from("User").insert(userData);
  // console.log(error);
  return error;
};

export const verifyLogin = async (email: string, password: string) => {
  const { data: User, error } = await supabase
    .from("User")
    .select("password_hash")
    .eq("email", email);
  if (error) {
    console.error(error);
    return {
      status: 500,
    };
  }

  if (User[0].password_hash === null) {
    return {
      status: 404,
    };
  }
  return {
    status: User?.[0]?.password_hash === password ? 200 : 401,
  };
};
