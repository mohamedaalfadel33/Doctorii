import ImagesSlider from '@/components/ui/ImagesSlider';
import React from 'react';

const CardDetails = {
  image: '/dental.png',
  title: 'Teeth Cleaning',
  oldPrice: 300,
  newPrice: 150,
  discount: 50,
};
const OurDeals = () => {
  return (
    <section className="p-12">
      <h2 className="text-5xl">Our Deals</h2>
      <div className="bg-zinc-300 p-12 mx-24 rounded-md mt-8">
        <ImagesSlider />
      </div>
    </section>
  );
};

export default OurDeals;
