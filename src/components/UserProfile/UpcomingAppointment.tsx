"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Appointment from "../AppoinmentsPage/Appointment";
import Link from "next/link";
import axios from "axios";

function UpcomingAppointment() {
  const [data, setData] = useState<typeof x | any>();
  const [isLoad, setIsLoad] = useState(false);

  async function apiRequest() {
    await axios
      .get("/api/user/get-appointments")
      .then((response) => {
        response.data.status === "success" && setData(response.data.data.at(0));
      })
      .catch((error) => {});
  }
  useEffect(function () {
    apiRequest();
    setIsLoad(true);
  }, []);

  if (isLoad)
    return (
      <div className="mt-16 rounded-3xl bg-blue-100 p-4">
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
          <Appointment
            name={data?.doctor.name}
            location="Khartoum,AL-Amarat ibn Sina Hospital"
            date={data?.updatedAt}
            time={data?.appointmentHour}
            status={data?.status}
            cancel={data?.status === "pending" ? false : true}
            id={data?._id}
          />
        </div>

        <Link href="/appointments">
          <p className="mt-8 rounded-sm bg-zinc-700 p-4 text-center text-zinc-50">
            See All Appointments
          </p>
        </Link>
      </div>
    );
}

export default UpcomingAppointment;

const x = {
  _id: "670d19fb74a88633e41cb882",
  patient: "6709395a2c413d5280f4f307",
  doctor: {
    _id: "67094581370b21bb41991e45",
    name: "musab ibrahim",
    photo:
      "https://res.cloudinary.com/dczpo8rpb/image/upload/v1728657668/rcv0ckidu8fful0zwbgi.jpg",
    specialty: "Neurology",
    id: "67094581370b21bb41991e45",
  },
  appointmentDate: "2024-10-19T00:00:00.000Z",
  appointmentHour: "16:00",
  status: "pending",
  isPaid: false,
  createdAt: "2024-10-14T13:17:47.080Z",
  updatedAt: "2024-10-14T13:17:47.080Z",
  __v: 0,
};
