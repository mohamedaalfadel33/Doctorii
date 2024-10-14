import { Button } from "@/components/ui/button";
import Header from "@/components/UserProfile/Header";
import UpcomingAppointment from "@/components/UserProfile/UpcomingAppointment";
import Link from "next/link";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const page = () => {
  return (
    <div className="p-12">
      <Header />

      <div className="mt-16 flex justify-center gap-8">
        <Link
          href="/profile/update"
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

        <div className="flex gap-4 rounded-3xl bg-blue-100 p-24">
          <p>Total Booking</p>
          <p>54</p>
        </div>
      </div>

      <UpcomingAppointment />
    </div>
  );
};

export default page;
