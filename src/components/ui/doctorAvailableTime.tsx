import { cn } from "@/lib/utils";
import { format } from "date-fns";
import React from "react";

type DoctorAvailableTimeProps = {
  day: string;
  startTime: string;
  endTime: string;
  className?: string;
  notAvailable?: boolean;
  data: [
    {
      date: string;
      id: string;
      hours: [
        {
          isAvailable: boolean;
          start: string;
          end: string;
          id: string;
          currentPatients: string;
          maxPatients: string;
        },
      ];
    },
  ];
};

function DoctorAvailableTime({
  day,
  endTime,
  startTime,
  className,
  notAvailable,
  data,
}: DoctorAvailableTimeProps | any) {
  notAvailable = !data?.hours.at(0)?.isAvailable;
  return (
    <div className={cn(`w-40 rounded-md bg-orange-200 p-2`)}>
      <h2>{format(data?.date, "MM/dd/yyyy")}</h2>

      {notAvailable ? (
        <h3>Not Available</h3>
      ) : (
        <>
          <h3>
            <span className="font-sans">From :</span> {data?.hours.at(0)?.start}
          </h3>
          <h3>
            <span className="font-sans">To :</span> {data?.hours.at(0)?.end}
          </h3>
        </>
      )}
    </div>
  );
}

export default DoctorAvailableTime;
