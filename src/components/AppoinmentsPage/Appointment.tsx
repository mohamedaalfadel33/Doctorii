import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type AppointmentProps = {
  name: string;
  location: string;
  date: string;
  time: string;
  status: "Confirmed" | "Completed" | "Cancelled";
  cancel: boolean;
};

const Appointment = ({
  name,
  location,
  date,
  time,
  status,
  cancel,
}: AppointmentProps) => {
  return (
    <div className="grid grid-cols-5 items-center rounded-md bg-zinc-50 p-4 py-6">
      <h2>{name}</h2>
      <p className="font-sans">{location}</p>
      <p className="font-sans">
        {date} <br />
        {time}
      </p>

      <p
        className={cn(
          "font-sans",
          status === "Cancelled" ? "text-red-500" : "",
          status === "Completed" ? "text-green-500" : "",
        )}
      >
        {status}
      </p>
      {!cancel && (
        <Button variant={"destructive"} className="py-6">
          Cancel
        </Button>
      )}
    </div>
  );
};

export default Appointment;
