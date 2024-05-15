import Auth from "@/components/auth/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (cookies().get("user")) redirect("/profile");

  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full items-center justify-center">
      <Auth register={searchParams?.register !== undefined} />
    </div>
  );
};

export default Page;
