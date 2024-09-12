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
    <div className="w-full rounded-3xl bg-zinc-200 p-8">
      <div className="flex items-center gap-2">
        {icon}
        <h2>{title}</h2>
      </div>
      <p className="font-sans mt-2">{description}</p>
    </div>
  );
};

export default AboutDoctorCard;
