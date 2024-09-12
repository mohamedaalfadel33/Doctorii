import Image from "next/image";
import React from "react";
import Star from "./star";
import { MdGroups2 } from "react-icons/md";
import Badge from "./badge";
import { FaUserDoctor } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import DoctorAvailableTime from "./doctorAvailableTime";
import { Button } from "./button";

const DoctorCard = () => {
  return (
    <div className="flex gap-4 rounded-md bg-zinc-300 p-8">
      <div>
        <Image
          src={"/1584844567410.jpeg"}
          alt="doctor"
          width={90}
          height={1}
          className="rounded-full border-[3px] border-zinc-800"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2>
          <span className="font-sans">Dr.</span> Ammar abdo halfawe
        </h2>
        <p className="font-sans">
          Member of Scientific Council of Sudanese board of Pediatric...
        </p>

        <div className="flex items-center gap-2">
          <Star />
          <div className="flex items-center rounded-full bg-zinc-100 p-[2px] px-3">
            <MdGroups2 size={20} />
            <p>
              <span className="mx-1 text-xs">3361</span>
              <span className="font-sans text-xs">Visitors</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Badge
            className="bg-sky-400"
            text={"Pediatric Specialized in Pediatric Allergy and Immunology"}
            icon={<FaUserDoctor />}
          />
          <Badge
            className="bg-sky-800"
            text={"Khartoum, AL-Amarat - Ibn Sina Hospital"}
            icon={<CiLocationOn />}
          />
          <Badge
            className="bg-zinc-800"
            text={"5,000 SDG"}
            icon={<CiDollar />}
          />
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <DoctorAvailableTime
            day="Monday"
            startTime="10:00 AM"
            endTime="12:00 PM"
          />
          <DoctorAvailableTime
            day="Monday"
            startTime="10:00 AM"
            endTime="12:00 PM"
          />
          <DoctorAvailableTime
            day="Monday"
            startTime="10:00 AM"
            endTime="12:00 PM"
          />
          <DoctorAvailableTime
            day="13/10/2024"
            startTime="10:00 AM"
            endTime="12:00 PM"
            notAvailable={true}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="w-full p-12">Check Out</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
