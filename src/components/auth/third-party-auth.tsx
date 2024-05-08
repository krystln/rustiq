"use server";
import { signIn } from "@/auth";
import { Button } from "../ui/button";

import Image from "next/image";
import Google from "/public/icons/google.svg";
import Github from "/public/icons/github.svg";

const GoogleSignIn = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
      className="w-full grow"
    >
      <Button variant="ghost" className="flex w-full gap-2" type="submit">
        <Image src={Google} alt=" " width={25} height={25} />
        <p>Google</p>
      </Button>
    </form>
  );
};

const GithubSignIn = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
      className="w-full grow"
    >
      <Button variant="ghost" className="flex w-full gap-2" type="submit">
        <Image src={Github} alt=" " width={25} height={25} />
        <p>Github</p>
      </Button>
    </form>
  );
};

export { GoogleSignIn, GithubSignIn };
