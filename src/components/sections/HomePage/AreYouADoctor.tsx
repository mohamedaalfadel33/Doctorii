import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

const AreYouADoctor = () => {
  return (
    <section>
      <div className="m-4 rounded-md bg-zinc-800 p-12">
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
          <Image src={"/doctor.png"} alt="doctor" width={400} height={400} />
        </div>
        <Link href={"/signup"}>
          <Button className="mt-8 rounded-full bg-zinc-50 p-8 text-zinc-800 hover:bg-blue-300 lg:p-24 lg:text-7xl">
            JOIN US
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AreYouADoctor;
