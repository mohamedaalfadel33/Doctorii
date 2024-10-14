import React from "react";

type AboutDoctorCardProps = {
  title: string;
  icon?: JSX.Element;
  description: string;
};

const AboutDoctorCard = ({
  title,
  icon,
  description,
}: AboutDoctorCardProps) => {
  return (
    <div className="w-full rounded-3xl bg-[#DADADB] p-8">
      <div className="flex items-center gap-2 text-xl font-bold">
        {icon}
        <h2>{title}</h2>
      </div>
      <p className="mt-2 font-sans">{description}</p>
    </div>
  );
};

export default AboutDoctorCard;
