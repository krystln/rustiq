"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import Image from "next/image";
import Google from "/public/icons/google.svg";
import Github from "/public/icons/github.svg";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();

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
    try {
      const session = await fetch("/api/v0.1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      switch (session.status) {
        case 401:
          form.setError("email", {
            message: "Failed to login, check email & password",
          });
          form.setError("password", {
            message: "Failed to login, check email & password",
          });
          break;

        case 404:
          form.setError("email", {
            message:
              "User not found, register or try Google/Github login instead.",
          });
          break;

        case 500:
          throw new Error(session.statusText);

        case 200:
          router.push("/");
          break;
      }
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

const AuthForm = () => {
  const register = useSearchParams().get("register");

  return (
    <Tabs
      defaultValue={register === null ? "login" : "register"}
      className="w-1/4"
    >
      <TabsList className="w-full bg-gray-950">
        <TabsTrigger className="w-full" value="login">
          Login
        </TabsTrigger>
        <TabsTrigger className="w-full" value="register">
          Register
        </TabsTrigger>
      </TabsList>
      <div className="my-2 rounded-md border p-4">
        <TabsContent value="login" className="flex flex-col items-center">
          <ThirdPartyAuth />
          <div className="my-3.5 flex w-full items-center gap-2">
            <Separator className="shrink" />
            <p className="whitespace-nowrap text-sm text-gray-500">
              or with email
            </p>
            <Separator className="shrink" />
          </div>
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </div>
    </Tabs>
  );
};

const ThirdPartyAuth = () => {
  const router = useRouter();

  return (
    <div className="flex w-full grow gap-2">
      <Button
        variant="ghost"
        className="flex grow gap-2"
        onClick={() => {
          router.push("/auth/google");
        }}
      >
        <Image src={Google} alt=" " width={25} height={25} />
        <p>Google</p>
      </Button>
      <Button
        variant="ghost"
        className="flex grow gap-2"
        onClick={() => {
          router.push("/auth/github");
        }}
      >
        <Image src={Github} alt=" " width={30} height={30} />
        <p>Github</p>
      </Button>
    </div>
  );
};

const Auth = () => {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
};

export default Auth;
export { LoginForm, RegisterForm };
