import { cn } from "@/lib/utils";
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
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
  doctorId: string;
};

function DoctorAvailableTime({
  data,
  doctorId,
}: DoctorAvailableTimeProps | any) {
  const date = format(data?.date, "yyyy/MM/dd");
  const dateReq = date.replaceAll("/", "-");

  const router = useRouter();

  async function makeAppointment() {
    await axios
      .post("/api/user/book-appointment", {
        doctor: doctorId,
        appointmentDate: dateReq,
        appointmentHour: data?.hours[0].start,
      })
      .then((response) => {
        router.push("/appointments/confirm-appointment");
      })
      .catch((error) => {});
  }

  const notAvailable = !data?.hours.at(0)?.isAvailable;

  return (
    <button
      className={cn(
        `h-24 w-40 rounded-md bg-[#2B2A33] p-2 font-semibold text-[#eeeeee] disabled:cursor-not-allowed`,
        notAvailable && "bg-[#2B2A33]/50"
      )}
      onClick={() => {
        makeAppointment();
      }}
      disabled={notAvailable}
    >
      <h2>{date}</h2>

      {notAvailable ? (
        <h3>Not Available</h3>
      ) : (
        <>
          <h3>
            <span className="font-thin">From :</span> {data?.hours.at(0)?.start}
          </h3>
          <h3>
            <span className="font-thin">To :</span> {data?.hours.at(0)?.end}
          </h3>
        </>
      )}
    </button>
  );
}

export default DoctorAvailableTime;
