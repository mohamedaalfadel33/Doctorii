"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Appointment from "../AppoinmentsPage/Appointment";
import Link from "next/link";

const UpcomingAppointment = () => {
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
          name="Dr. Ammatar abdo halfawe"
          location="Khartoum,AL-Amarat ibn Sina Hospital"
          date="12-12-2022"
          time="7:00 PM - 11:00 PM"
          status="Confirmed"
          cancel={true}
        />
      </div>

      <Link href="/appointments">
        <p className="mt-8 rounded-sm bg-zinc-700 p-4 text-center text-zinc-50">
          See All Appointments
        </p>
      </Link>
    </div>
  );
};

export default UpcomingAppointment;

const x = {
  _id: "670b4518548702b1e74f3ebc",
  patient: "6709395a2c413d5280f4f307",
  doctor: {
    _id: "67094581370b21bb41991e45",
    name: "musab ibrahim",
    photo: "https://example.com/newphoto.jpg",
    specialty: "Neurology",
    id: "67094581370b21bb41991e45",
  },
  appointmentDate: "2024-10-12T00:00:00.000Z",
  appointmentHour: "12:00",
  status: "pending",
  isPaid: false,
  createdAt: "2024-10-13T03:57:12.801Z",
  updatedAt: "2024-10-13T03:57:12.801Z",
  __v: 0,
};
