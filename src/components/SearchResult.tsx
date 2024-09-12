import { DollarSign, Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import DoctorCard from "./ui/doctorCard";
import Link from "next/link";

const SearchResult = () => {
  return (
    <section className="flex flex-col justify-center gap-4">
      <div>Sort By</div>
      <div className="flex justify-between">
        <Button className="flex gap-4 rounded-sm bg-zinc-500 px-8 py-16 text-zinc-50">
          <div className="flex flex-col gap-2">
            <Star size={40} />
            <h2 className="text-2xl">Best Match</h2>
          </div>
        </Button>
        <Button className="flex gap-4 rounded-sm bg-zinc-500 px-8 py-16 text-zinc-50">
          <div className="flex flex-col gap-2">
            <Star size={40} />
            <h2 className="text-2xl">Top Rated</h2>
          </div>
        </Button>
        <Button className="flex gap-4 rounded-sm bg-zinc-500 px-16 py-16 text-zinc-50">
          <div className="flex flex-col gap-2">
            <DollarSign size={40} />
            <h2 className="text-2xl">Price</h2>
          </div>
        </Button>
        <Button className="flex gap-4 rounded-sm bg-zinc-500 px-16 py-16 text-zinc-50">
          <div className="flex flex-col gap-2">
            <DollarSign size={40} />
            <h2 className="text-2xl">Price</h2>
          </div>
        </Button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <h2 className="font-sans">showing 100 doctor</h2>
        <Link href={"/search/Dr-Ammar-abdo-halfawe"}>
          <DoctorCard />
        </Link>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </section>
  );
};

export default SearchResult;
