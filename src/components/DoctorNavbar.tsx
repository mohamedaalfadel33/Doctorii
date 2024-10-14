import Link from "next/link";
import React from "react";

const DoctorNavbar = () => {
  return (
    <div className="flex justify-between p-4 py-12 lg:px-12">
      <header className="text-xl">
        <Link href={"/"}>Logo</Link>
      </header>
      <div className="flex items-center gap-4 underline">
        <Link
          href={"/doctor/Appointments"}
          className="font-sans text-sm hover:text-blue-200"
        >
          Doctor Name
        </Link>
        <Link
          href={"/doctor/Appointments"}
          className="font-sans text-sm hover:text-blue-200"
        >
          Appointments
        </Link>
        <Link
          href={"/doctor/Appointments"}
          className="font-sans text-sm hover:text-blue-200"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default DoctorNavbar;
