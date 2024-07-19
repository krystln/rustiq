import ContactUs from "@/components/forms/contactUs";
import React from "react";

const Page = () => {
  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center gap-10">
      <h1 className="font-['Inika'] text-5xl font-black">Contact Us</h1>
      <div className="w-1/3">
        <ContactUs />
      </div>
    </div>
  );
};

export default Page;
