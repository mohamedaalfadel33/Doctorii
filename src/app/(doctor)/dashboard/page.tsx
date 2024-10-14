import Header from "@/components/UserProfile/Header";
import Link from "next/link";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineDangerous } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import MangeAppointments from "@/components/AppoinmentsPage/MangeAppointments";
const DoctorPage = () => {
  return (
    <div className="p-12">
      {/* Header section */}
      <div className="flex justify-between">
        <Header />
        <div className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-red-200 px-8">
          <MdOutlineDangerous size={40} />
          <p>Complete Your Doctor Application</p>
        </div>
      </div>

      <div className="mt-16 flex justify-center gap-8">
        <Link
          href="/dashboard/update-profile"
          className="flex items-center gap-4 rounded-3xl bg-zinc-300 p-24"
        >
          <FaPencilAlt size={25} />
          <p>Update Profile</p>
        </Link>

        <Link
          href="/profile/update-password"
          className="flex items-center gap-4 rounded-3xl bg-zinc-300 p-24"
        >
          <FaLock size={25} />
          <p>Update Password</p>
        </Link>

        <Link
          href="/profile/update-password"
          className="flex items-center gap-4 rounded-3xl bg-zinc-300 p-24"
        >
          <FaRegCalendarAlt size={25} />
          <p>Check Appointments</p>
        </Link>

        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-blue-100 p-24">
          <p className="text-nowrap">Total Booking</p>
          <p>54</p>
        </div>
      </div>

      <MangeAppointments />
    </div>
  );
};

export default DoctorPage;
