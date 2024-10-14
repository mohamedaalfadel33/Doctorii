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

type dataType = {
  _id?: string;
  name?: string;
  photo?: string;
  specialty?: string;
  about?: string;
  price: string;

  availability: [
    {
      date: string;
      id: string;
      hours: [
        {
          isAvailable: boolean;
          start: string;
          end: string;
          id: string;
          currentPatients: string;
          maxPatients: string;
        },
      ];
    },
  ];
};

function DoctorCard({ data }: dataType | any) {
  console.log(data);

  return (
    <div className="mt-4 flex gap-4 rounded-md bg-zinc-300 p-8">
      <div>
        <Image
          src={data?.photo}
          alt="doctor"
          width={90}
          height={90}
          className="rounded-full border-[3px] border-zinc-800"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2>
          <span className="font-sans">Dr.</span> {data?.name}
        </h2>
        <p className="font-sans">{data?.about}</p>

        <div className="flex items-center gap-2">
          <Star value={data?.ratings.avgRating} />
          <div className="flex items-center rounded-full bg-zinc-100 p-[2px] px-3">
            <MdGroups2 size={20} />
            <p>
              <span className="mx-1 text-xs">{data?.ratings.ratingCount}</span>
              <span className="font-sans text-xs">Visitors</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Badge
            className="bg-sky-600"
            text={data?.specialty}
            icon={<FaUserDoctor />}
          />
          <Badge
            className="bg-sky-800"
            text={"Khartoum, AL-Amarat - Ibn Sina Hospital"}
            icon={<CiLocationOn />}
          />
          <Badge
            className="bg-zinc-800"
            text={
              data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " SDG"
            }
            icon={<CiDollar />}
          />
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          {data?.availability.map((av: any, i: number) => {
            return (
              <DoctorAvailableTime
                key={i}
                data={av}
                day="Monday"
                startTime="10:00 AM"
                endTime="12:00 PM"
              />
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="w-full p-12">Check Out</Button>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
