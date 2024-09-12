import AboutDoctorCard from "@/components/doctorProfile/AboutDoctorCard";
import DoctorProfileCard from "@/components/doctorProfile/DoctorProfileCard";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const page = ({ params }: any) => {
  const doctorName = params.doctor;
  return (
    <section className="mx-12">
      <div className="grid grid-cols-2 gap-4">
        <DoctorProfileCard name={doctorName} />
        <div className="flex gap-4">
          <AboutDoctorCard
            icon={<BsExclamationCircle size={30} />}
            title="About the doctor"
            description="Dr. Ammatar abdo halfawe, Assistant Lecturer of Pediatrics and Newborns - National Research Center/Consultant of Pediatric Chest and Allergy/International Consultant of Breastfeeding and Child Nutrition"
          />
          <AboutDoctorCard
            icon={<CiLocationOn size={30} />}
            title="About the doctor"
            description="Khartoum, AL-Amarat - Ibn Sina Hospital"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
