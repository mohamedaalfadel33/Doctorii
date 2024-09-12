import Image from "next/image";
import React from "react";
import Badge from "../ui/badge";
import { MdGroups2 } from "react-icons/md";
import Star from "../ui/star";

const DoctorProfileCard = ({ name }: any) => {
  return (
    <div className="flex gap-2 rounded-3xl bg-sky-200 p-8">
      <div>
        <Image
          src="/1584844567410.jpeg"
          alt="doctor"
          width={150}
          height={1}
          className="rounded-full border-[3px] border-zinc-800"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2>
          <span className="font-sans">Dr.</span> Ammar abdo halfawe
        </h2>
        <Badge
          className="bg-zinc-800"
          text={"Pediatric Specialized in Pediatric Allergy and Immunology"}
        />

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
      </div>
    </div>
  );
};

export default DoctorProfileCard;
