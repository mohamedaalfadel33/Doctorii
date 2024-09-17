import MangeAppointments from "@/components/AppoinmentsPage/MangeAppointments";
import Search from "@/components/SearchPage/Search";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="p-12">
      <div className="flex items-center gap-4">
        <Search />
        <Button className="rounded-full bg-blue-400 px-24 py-8 text-xl">
          Search
        </Button>
      </div>

      {/* Mange Appointments */}
      <MangeAppointments />
      
    </div>
  );
};

export default page;
