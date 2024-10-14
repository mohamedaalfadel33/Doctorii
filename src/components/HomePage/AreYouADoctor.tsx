import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AreYouADoctor = () => {
  return (
    <section className="h-screen">
      <div className="m-4 h-[90dvh] rounded-md bg-zinc-800 p-12">
        <div className="lg:flex lg:justify-between">
          <div className="text-4xl text-zinc-50">
            <h2>
              Are You a <span className="text-blue-400 underline">Doctor</span>{" "}
              ?
            </h2>
            <h2>
              Ready to <span className="underline">expand</span> yovr reach and
            </h2>
            <h2>and patient base?</h2>

            <h3 className="mt-24 text-xl tracking-wide">
              Increase yovr visibility and attract new patients. <br /> Sign up
              as a <span className="text-blue-400"> doctor </span>
              and start offering yovr seruices <br /> on our platform.
            </h3>
          </div>
          <Image src={"/doctor.jpg"} alt="doctor" width={600} height={400} />
        </div>
        <Link href={"/signup"}>
          <Button className="mb-auto rounded-full bg-zinc-50 p-8 text-zinc-800 hover:bg-zinc-200 lg:p-24 lg:text-7xl">
            JOIN US
            <span>
              <ArrowUpRight size={140} />
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AreYouADoctor;
