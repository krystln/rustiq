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
