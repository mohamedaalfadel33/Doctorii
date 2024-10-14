"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdCreditScore } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import axios from "axios";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
function Page() {
  const [data, setData] = useState<any>();
  const [isLoad, setIsLoad] = useState(false);

  const { toast } = useToast();
  async function apiRequest() {
    await axios
      .get("/api/user/get-appointments")
      .then((response) => {
        console.log(response.data);
        response.data.status === "success" &&
          setData(response.data.data.at(-1));
      })
      .catch((error) => console.log(error.response.data));
  }
  useEffect(function () {
    apiRequest();
    setIsLoad(true);
  }, []);

  const id = data?._id;
  console.log(id);

  async function cancelBooking() {
    await axios
      .post(`/api/user/cancel-appointment`, { id })
      .then((response) => {
        console.log(response.data);
        toast({
          title: response.data.status,
          description: response.data.message,
        });
      })
      .catch((error) => console.log(error.response.data));
  }

  if (isLoad)
    return (
      <div className="grid grid-cols-2 gap-8 p-12">
        <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-sky-700 p-12 text-zinc-50">
          <h2>Booking Information</h2>
          <MdCreditScore size={150} />
          <p>Your booking has been confirmed</p>
          <Separator />
          <h2>Booking Details</h2>
          <div className="flex w-full justify-between">
            <div className="font-sans font-bold">
              <p>Patient Name</p>
              <p>Booking Date</p>
              <p>Doctor Name</p>
              <p>Location</p>
            </div>
            <div className="font-sans font-medium">
              <p>Mohamed Bakri</p>
              <p>
                {data?.appointmentDate.slice(0, 10) +
                  ", " +
                  data?.appointmentHour}
              </p>
              <p>{data?.doctor?.name}</p>
              <p>Khartoum, AL-Amarat ibn Sina Hospital</p>
            </div>
          </div>

          <div className="mt-8 flex gap-16">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-3 rounded-sm bg-zinc-50 p-4 text-zinc-800"
            >
              <FaArrowLeft size={15} className="text-zinc-900" />
              Home Page
            </Link>

            <Button
              onClick={() => cancelBooking()}
              className="h-14 rounded-sm bg-destructive p-4 text-center text-destructive-foreground"
            >
              Cancel Booking
            </Button>
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
}

export default Page;
