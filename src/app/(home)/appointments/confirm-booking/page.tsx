import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCreditScore } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
const page = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-12">
      <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-blue-400 p-12 text-zinc-50">
        <h2>Booking Information</h2>
        <MdCreditScore size={150} />
        <p>Your booking has been confirmed</p>
        <Separator />
        <h2>Booking Details</h2>
        <div className="flex w-full justify-between">
          <div className="font-sans">
            <p>Patient Name</p>
            <p>Booking Date</p>
            <p>Doctor Name</p>
            <p>Location</p>
          </div>
          <div className="font-sans">
            <p>Mohamed Bakri Sied Ahmed</p>
            <p>Tomorrow, 3:00 PM - 5:30 PM</p>
            <p>Musab Ibrahim</p>
            <p>Khartoum, AL-Amarat ibn Sina Hospital</p>
          </div>
        </div>

        <div className="mt-8 flex gap-16">
          <Link
            href={"/appointments"}
            className="flex items-center justify-center gap-3 rounded-sm bg-zinc-50 p-4 text-zinc-800"
          >
            <FaArrowLeft size={15} className="text-zinc-900" />
            Home Page
          </Link>

          <Link
            href={"/appointments"}
            className="rounded-sm bg-red-600 p-4 text-center text-zinc-50"
          >
            Cancel Booking
          </Link>
        </div>
      </div>

      <div>
        <Image
          src={"/d47bc82a6d3869ec5f68871a0bf4037e.jpg"}
          alt="doctor"
          width={2500}
          height={1500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default page;
