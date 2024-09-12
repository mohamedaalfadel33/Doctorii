import React from "react";
import ImagesSlider from "../../ui/ImagesSlider";

const TopSpecialties = () => {
  return (
    <section className="p-12">
      <h2 className="text-5xl">Book from top specialties</h2>
      <div className="mt-8 rounded-md bg-blue-400 p-12 lg:mx-24">
        <ImagesSlider />
      </div>
    </section>
  );
};

export default TopSpecialties;
