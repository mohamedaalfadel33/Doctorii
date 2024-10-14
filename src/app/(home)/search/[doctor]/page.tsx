"use client";
import AboutDoctorCard from "@/components/DoctorProfile/AboutDoctorCard";
import BookingInformation from "@/components/DoctorProfile/BookingInformation";
import CustomerReview from "@/components/DoctorProfile/CustomerReview";
import DoctorProfileCard from "@/components/DoctorProfile/DoctorProfileCard";
import Gallery from "@/components/DoctorProfile/Gallery";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function formatName(name: string) {
  return name.replace(/-(\w)/, (match, letter) => " " + letter.toUpperCase());
}

function Page({ params }: any) {
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
            title="Location"
            description="Khartoum, AL-Amarat - Ibn Sina Hospital"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <Gallery />
        <BookingInformation />
      </div>

      <div>
        <CustomerReview />
      </div>
    </section>
  );
}

export default Page;
