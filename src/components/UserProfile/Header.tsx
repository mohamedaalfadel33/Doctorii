"use client";
import useSession from "@/Hooks/useSession";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const session = useSession() as any;
  const [load, setLoad] = useState(false);

  useEffect(function () {
    setLoad(true);
  }, []);
  if (load)
    return (
      <div className="flex items-center gap-8">
        <img
          src={session?.photo}
          alt="doctor"
          width={150}
          height={150}
          className="rounded-md border-[3px] border-zinc-800"
        />
        <h2 className="text-4xl">Hello, {session?.name}</h2>
      </div>
    );
}

export default Header;
