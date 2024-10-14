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

function Page({ params }: any) {
  const [data, setData] = useState<any>();
  const [dataRating, setDataRating] = useState<any>();

  const [isLoad, setIsLoad] = useState(false);

  const doctorId = params.doctor;

  async function getDoctorApi() {
    await axios
      .post("/api/doctor/get-doctor", { doctorId })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {});

    await axios
      .post("/api/doctor/get-doctor-rating", { doctorId })
      .then((response) => {
        setDataRating(response.data.data);
      })
      .catch((error) => {});
  }

  useEffect(
    function () {
      getDoctorApi();
      setIsLoad(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (isLoad)
    return (
      <section className="mx-12">
        <div className="grid grid-cols-2 gap-4">
          <DoctorProfileCard
            name={data?.name}
            visitors={dataRating?.ratingCount}
            rating={dataRating?.avgRating}
            specialty={data?.specialty}
          />
          <div className="flex gap-4">
            <AboutDoctorCard
              icon={<BsExclamationCircle size={30} />}
              title="About the doctor"
              description={data?.about as string}
            />
            <AboutDoctorCard
              icon={<CiLocationOn size={30} />}
              title="Location"
              description={data?.address as string}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Gallery />
          <BookingInformation data={data} doctorId={doctorId} />
        </div>

        <div>
          <CustomerReview
            doctorId={doctorId}
            visitors={dataRating?.ratingCount}
            rating={dataRating?.avgRating}
          />
        </div>
      </section>
    );
}

export default Page;
