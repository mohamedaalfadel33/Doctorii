"use client";
import AboutDoctorCard from "@/components/DoctorProfile/AboutDoctorCard";
import BookingInformation from "@/components/DoctorProfile/BookingInformation";
import CustomerReview from "@/components/DoctorProfile/CustomerReview";
import DoctorProfileCard from "@/components/DoctorProfile/DoctorProfileCard";
import Gallery from "@/components/DoctorProfile/Gallery";
import axios from "axios";
import { useEffect } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function page({ params }: any) {
  const doctorName = params.doctor;

  async function makeAppointment() {
    axios
      .post("/api/user/book-appointment", {
        doctor: "67094581370b21bb41991e45",
        appointmentDate: "2024-10-12",
        appointmentHour: "12:00",
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data));
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(function () {
    async function call() {
      await makeAppointment();
    }

    call();
  }, []);

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

export default page;
