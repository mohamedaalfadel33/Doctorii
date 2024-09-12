import { Button } from "@/components/ui/button";
import React from "react";

const OurDoctors = () => {
  return (
    <div className="mt-24 flex justify-center gap-8 bg-zinc-800 p-6">
      <Button className="rounded-full bg-zinc-50 px-10 py-6 text-zinc-800 hover:bg-blue-300 hover:text-zinc-50">
        Our Doctors
      </Button>
      <Button className="rounded-full bg-zinc-50 px-10 py-6 text-zinc-800 hover:bg-blue-300 hover:text-zinc-50">
        Our Deals
      </Button>
    </div>
  );
};

export default OurDoctors;
