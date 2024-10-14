"use client";
import axios, { Axios, AxiosPromise } from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [data, setData] = useState<any>();

  async function apiRequest() {
    await axios
      .get("/api/user/get-patient")
      .then((response) => {
        response.data.status === "success" && setData(response.data.data);
      })
      .catch((error) => {});
  }

  useEffect(function () {
    apiRequest();
  }, []);
  return (
    <div className="flex items-center gap-8">
      <Image
        src={data?.photo}
        alt="doctor"
        width={150}
        height={150}
        className="rounded-full border-[3px] border-zinc-800"
      />
      <h2 className="text-4xl">Hello, {data?.name}</h2>
    </div>
  );
}

export default Header;
