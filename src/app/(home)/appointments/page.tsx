import MangeAppointments from "@/components/AppoinmentsPage/MangeAppointments";
import Search from "@/components/SearchPage/Search";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div className="p-12">
      <div className="flex items-center gap-4">
        <Search />
      </div>

      <MangeAppointments />
    </div>
  );
}

export default page;
