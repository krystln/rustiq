import React, { useEffect } from "react";

import Navbar from "./navbar";

import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { debounce } from "@/lib/utils";

const Searchbar = () => {
  const formSchema = z.object({
    search: z.string().min(3),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    if (form.getValues("search") === "") return;

    const [search, clearSearch] = debounce(
      () => alert(form.getValues("search")),
      1000,
    );
    search();

    return () => {
      clearSearch();
    };
  }, [form.getValues("search")]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((formData) =>
          alert(JSON.stringify(formData)),
        )}
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Search" />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};

const Profile = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/50" alt="Profile" />
      {/* <Image
        src="https://via.placeholder.com/50"
        alt="profile"
        height={50}
        width={50}
      ></Image> */}
    </div>
  );
};

const Header = () => {
  const session = false;

  return (
    <div className="flex items-center justify-center gap-4 p-2">
      <h1 className="text-xl font-bold">Rustiq</h1>
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default Header;
