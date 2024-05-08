"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { signIn } from "@/auth";

const LoginForm = () => {
  // const router = useRouter();

  const formSChema = z.object({
    email: z
      .string()
      .email({
        message: "Please enter a valid email address",
      })
      .min(4),
    password: z
      .string()
      .min(10, { message: "Password must be at least 10 characters long" }),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const form = useForm<z.infer<typeof formSChema>>({
    resolver: zodResolver(formSChema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSChema>) {
    // e.prevent.default();
    setIsPasswordVisible(false);
    alert("signing in");
    try {
      await signIn("credentials", data, { redirectTo: "/" });
    } catch (e) {
      form.setError("root", {
        message: "Internal error occured, please try again later.",
      });
      console.error(e);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" />
              </FormControl>
              {/* <FormDescription>This is your email.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex gap-1">
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type={isPasswordVisible ? "text" : "password"}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                  >
                    {isPasswordVisible ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </FormControl>
              {/* <FormDescription>This is your password.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

const RegisterForm = () => {
  const formScheme = z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(10, { message: "Password must be at least 10 characters long" }),
      confirmPassword: z
        .string()
        .min(10, { message: "Password must be at least 10 characters long" }),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({
          code: "custom",
          message: "Passwords do not match",
          path: ["confirmPassword"],
        });
      }
    });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof formScheme>) {
    setIsPasswordVisible(false);
    setIsConfirmPasswordVisible(false);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-3.5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" />
              </FormControl>
              {/* <FormDescription>This is your email.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex gap-1">
                  <Input
                    {...field}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Create your password"
                  />
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                  >
                    {isPasswordVisible ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </FormControl>
              {/* <FormDescription>This is your email.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="flex gap-1">
                  <Input
                    {...field}
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    placeholder="Re-enter your password"
                  />
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                  >
                    {isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </FormControl>
              {/* <FormDescription>This is your email.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="">
          Register
        </Button>
      </form>
    </Form>
  );
};

export { LoginForm, RegisterForm };
