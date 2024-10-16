import ImagesSlider from "@/components/ui/ImagesSlider";
import React from "react";

const CardDetails = {
  image: "/dental.png",
  title: "Teeth Cleaning",
  oldPrice: 300,
  newPrice: 150,
  discount: 50,
};
const OurDeals = () => {
  return (
    <section className="p-4">
      <h2 className="text-5xl">Our Deals</h2>
      <div className="mt-8 rounded-md bg-[#DADADB] p-12 lg:mx-24">
        <ImagesSlider />
      </div>
    </section>
  );
};

export default OurDeals;
