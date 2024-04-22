"use server";

import { supabase } from "./client";

interface Insert {
  name: string;
  email: string;
  image: string;
  role: string;
}

type Product = {
  id: number;
  name: string;
  price: number;
  review: number;
  description: string;
  filter_by_room: string[];
  filter_by_type: string[];
};

export const createUser = async ({ userData }: { userData: Insert }) => {
  const { error } = await supabase.from("User").insert(userData);
  // console.log(error);
  return error;
};

export const createProduct = async (productData: Product[]) => {
  const { error } = await supabase.from("Products").insert(productData);
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

export const getUser = async (email: string) => {
  const { data: User, error } = await supabase
    .from("User")
    .select("id, name, email, image, role")
    .eq("email", email);
  if (error) {
    console.error(error);
    return {
      status: 500,
    };
  }

  return {
    status: 200,
    data: User,
  };
};

export const getProductByParameter = async (
  productParameter: "name" | "id",
  productParameterValue: string | number,
) => {
  try {
    const { data: Product, error } = await supabase
      .from("Products")
      .select("*")
      .eq(productParameter, productParameterValue);

    if (error) {
      throw new Error(error.message);
    }

    return {
      status: 200,
      data: Product[0],
    };
  } catch (e) {
    console.error(e);
    return {
      status: 500,
      data: {} as Product,
    };
  }
};

export const findProductId = async (name: string) => {
  name = name.replace("-", " ");
  const { status, data } = await getProductByParameter("name", name);
  return status === 200 ? data.id : 0;
};
