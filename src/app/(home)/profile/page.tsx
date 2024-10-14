"use client";
import Header from "@/components/UserProfile/Header";
import UpcomingAppointment from "@/components/UserProfile/UpcomingAppointment";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLock, FaPencilAlt } from "react-icons/fa";
function Page() {
  const [data, setData] = useState<any>();
  const [isLoad, setIsLoad] = useState(false);

  async function apiRequest() {
    await axios
      .get("/api/user/get-appointments")
      .then((response) => {
        response.data.status === "success" &&
          setData(response.data.data.length);
      })
      .catch((error) => {});
  }
  useEffect(function () {
    apiRequest();
    setIsLoad(true);
  }, []);

  if (isLoad)
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
            <p>{data}</p>
          </div>
        </div>

        <UpcomingAppointment />
      </div>
    );
}

export default Page;
