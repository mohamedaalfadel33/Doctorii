import Header from "@/components/UserProfile/Header";
import Link from "next/link";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDangerous } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
const page = () => {
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

      <div className="mt-16 flex w-full justify-center gap-8">
        <Link
          href="/dashboard/update-profile"
          className="flex w-full items-center justify-center gap-4 rounded-3xl bg-zinc-300 p-24"
        >
          <FaPencilAlt size={25} />
          <p>Update Profile</p>
        </Link>
        <Link
          href="/dashboard/update-profile"
          className="flex w-full items-center justify-center gap-4 rounded-3xl bg-zinc-300 p-24"
        >
          <IoMdTime size={35} />
          <p>Update availability times</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
