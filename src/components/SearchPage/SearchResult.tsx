"use client";
import { DollarSign, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DoctorCard from "../ui/doctorCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

type dataType = {
  id?: string;
  name?: string;
  photo?: string;
  specialty?: string;
  map: any;
};

function SearchResult() {
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState<dataType>();

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  console.log(name);

  async function searchApi() {
    await axios
      .get(`/api/doctor/search?name=${name}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error?.response?.data));
  }

  useEffect(
    function () {
      searchApi();
      setIsLoad(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name]
  );

  if (isLoad)
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
          {data?.map((data: any) => {
            console.log(data);
            return (
              <Link href={`/search/${data?._id}`} key={data.id}>
                <DoctorCard data={data} />
              </Link>
            );
          })}
        </div>
      </section>
    );
}

export default SearchResult;

const x = {
  name: "musab ibrahim",
  photo: "https://example.com/newphoto.jpg",
  specialty: "Neurology",
  availability: [
    {
      date: "2024-10-12T00:00:00.000Z",
      hours: [
        {
          start: "01:00",
          end: "18:00",
          maxPatients: 8,
          currentPatients: 3,
          _id: "670b493a548702b1e74f3ed8",
          isAvailable: true,
          id: "670b493a548702b1e74f3ed8",
        },
      ],
      _id: "67094f0d370b21bb41991e5c",
      id: "67094f0d370b21bb41991e5c",
    },
  ],
  id: null,
};
