import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type AppointmentProps = {
  name: string;
  location: string;
  date: string;
  time: string;
  status: "Confirmed" | "Completed" | "Cancelled";
  cancel: boolean;
  id: string;
};

const Appointment = ({
  name,
  location,
  date,
  time,
  status,
  cancel,
  id,
}: AppointmentProps) => {
  const formattedDate = date?.slice(0, 10);
  const { toast } = useToast();

  async function cancelBooking() {
    await axios
      .post(`/api/user/cancel-appointment`, { id })
      .then((response) => {
        toast({
          title: response.data.status,
          description: response.data.message,
        });
      })
      .catch((error) => {});
  }

  return (
    <div className="grid grid-cols-5 items-center rounded-md bg-zinc-50 p-4 py-6">
      <h2>{name}</h2>
      <p className="font-sans">{location}</p>
      <p className="font-sans">
        {formattedDate} <br />
        {time + " AM"}
      </p>

      <p
        className={cn(
          "font-sans",
          status === "Cancelled" ? "text-red-500" : "",
          status === "Completed" ? "text-green-500" : ""
        )}
      >
        {status}
      </p>
      {!cancel && (
        <Button
          variant={"destructive"}
          className="py-6"
          onClick={() => cancelBooking()}
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

export default Appointment;
