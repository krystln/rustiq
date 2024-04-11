import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="mt-52 flex w-full items-center justify-center font-mono text-lg">
      {"Stuck?? "}
      <Link href="/">
        <Button variant="link" className="text-lg">
          Get Back!!
        </Button>
      </Link>
    </div>
  );
};

export default Page;
