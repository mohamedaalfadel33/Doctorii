import { Button } from "@/components/ui/button";
import React from "react";
import Search from "../SearchPage/Search";

const MainSection = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-extrabold">Doctorii</h1>
        <h2 className="mt-4 font-sans text-sm">Appointment Made Easier</h2>
      </div>
      <div className="mt-16 flex flex-col items-center gap-8">
        <h1 className="text-3xl">Book a Doctor</h1>
        <Search />
        <p className="mt-12 text-center font-sans">
          <span className="text-blue-400">Doctorii</span>
           is your one-stop online platform for convenient and affordable
          healthcare. We connect <br /> you with qualified doctors from the
          comfort of your home. Whether you need a routine <br />{" "}
          checkup, specialist consultation, or urgent medical advice.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
