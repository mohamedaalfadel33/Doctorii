import { cn } from "@/lib/utils";
import React from "react";

type DoctorAvailableTimeProps = {
  day: string;
  startTime: string;
  endTime: string;
  className?: string;
  notAvailable?: boolean;
};

const DoctorAvailableTime = ({
  day,
  endTime,
  startTime,
  className,
  notAvailable,
}: DoctorAvailableTimeProps) => {
  return (
    <div className={cn(`rounded-md bg-orange-200 p-2`)}>
      <h2>{day}</h2>

      {notAvailable ? (
        <h3>Not Available</h3>
      ) : (
        <>
          <h3>
            <span className="font-sans">From :</span> {startTime}
          </h3>
          <h3>
            <span className="font-sans">To :</span> {endTime}
          </h3>
        </>
      )}
    </div>
  );
};

export default DoctorAvailableTime;
