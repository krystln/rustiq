"use server";
import { signIn } from "@/auth";
import { Button } from "../ui/button";

import Image from "next/image";

const ThirdPartyAuth = async ({
  provider,
}: {
  provider: "google" | "github";
}) => {
  const providerImageURL = `/icons/${provider}.svg`;

  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: "/" });
      }}
      className="w-full grow"
    >
      <Button variant="ghost" className="flex w-full gap-2" type="submit">
        <Image src={providerImageURL} alt=" " width={25} height={25} />
        <p>{provider[0].toUpperCase() + provider.slice(1)}</p>
      </Button>
    </form>
  );
};

export default ThirdPartyAuth;
