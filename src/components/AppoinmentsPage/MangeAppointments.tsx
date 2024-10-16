"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Appointment from "./Appointment";
import axios from "axios";

function MangeAppointments() {
  const [data, setData] = useState<any>();

  async function getAppointments() {
    await axios
      .get("/api/user/get-appointments")
      .then((response: any) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {});
  }
  useEffect(function () {
    async function callApi() {
      await getAppointments();
    }

    callApi();
  }, []);

  return (
    <div className="mt-8 min-h-[50rem] rounded-3xl bg-[#DADADB] p-4">
      <h2 className="mb-8 text-center tracking-[0.2rem]">
        Upcoming Appointments
      </h2>
      <div>
        <div className="mb-8 grid grid-cols-5 p-4">
          <h3>Doctor Name</h3>
          <h3>Location</h3>
          <h3>Reservation Date</h3>
          <h3>Status</h3>
        </div>
      </div>

      <Separator className="mb-4 bg-zinc-600" />

      <div className="flex flex-col gap-8">
        {data?.map((data: any, i: number) => {
          return (
            <Appointment
              key={i}
              name={data.doctor.name}
              location="Khartoum,AL-Amarat ibn Sina Hospital"
              date={data.appointmentDate}
              time={data.appointmentHour}
              status={data.status}
              cancel={
                data?.status === "pending" || data?.status === "completed"
                  ? false
                  : true
              }
              id={data?._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MangeAppointments;
