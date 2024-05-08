import Auth from "@/components/auth/block";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = ({}) => {
  if (cookies().get("user")) redirect("/profile");

  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full items-center justify-center">
      <Auth />
    </div>
  );
};

export default Page;
