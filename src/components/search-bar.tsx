"use client";

import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { debounce } from "@/lib/utils";
import { useEffect } from "react";

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

export default Searchbar;
