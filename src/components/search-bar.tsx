"use client";

import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { debounce } from "@/lib/utils";
import { useEffect, useState } from "react";

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

  const [result, setResult] = useState<{
    message: string;
    params: string;
  }>({
    message: "",
    params: "",
  });

  useEffect(() => {
    if (form.getValues("search") === "") return;

    const [search, clearSearch] = debounce(async () => {
      const data = await fetch(
        `/api/v0.1/search?query=${form.getValues("search")}`,
      ).then((res) => res.json());
      setResult(data);
    }, 1000);

    search();

    return () => {
      clearSearch();
    };
  }, [form, form.getValues("search")]);

  // useEffect(() => {
  //   console.log(result);
  // }, [result]);

  return (
    <>
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
      <Results results={Array(result)} />
    </>
  );
};

const Results = ({
  results,
}: {
  results: { message: string; params: string }[];
}) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.message}</h2>
          <p>{result.params}</p>
        </div>
      ))}
    </div>
  );
};

export default Searchbar;
