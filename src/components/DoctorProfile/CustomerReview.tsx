import React, { useEffect, useState } from "react";
import Star from "../ui/star";
import Badge from "../ui/badge";
import { MdGroups2 } from "react-icons/md";
import UserReview from "./UserReview";
import axios from "axios";
import { format } from "date-fns";

function CustomerReview({ visitors, rating, doctorId }: any) {
  const [data, setData] = useState<typeof x | any>();
  const [isLoad, setIsLoad] = useState(false);

  async function getDoctorApi() {
    await axios
      .post("/api/doctor/get-doctor-review", { doctorId })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error?.response?.data));
  }

  useEffect(
    function () {
      getDoctorApi();
      setIsLoad(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  console.log(data);
  if (isLoad)
    return (
      <div className="mt-4 min-h-[28rem] rounded-3xl bg-zinc-300 p-4">
        <h2 className="text-center">Customers Reviews</h2>

        <div className="rounded-3xl bg-zinc-800 p-8">
          <div className="flex items-center justify-center gap-x-2">
            <h3 className="text-zinc-50">Average Rating</h3>
            <Star value={rating} />
          </div>

          <div className="mt-2 flex items-center justify-center gap-x-2">
            <h3 className="text-zinc-50">Based on</h3>
            <Badge
              icon={<MdGroups2 size={20} className="text-zinc-800" />}
              className="bg-zinc-50 text-zinc-800"
              text={visitors}
            />
          </div>
        </div>

        {/* Reviews */}
        <div>
          {data?.map((comment: typeof x, i: number) => {
            return (
              <UserReview
                key={i}
                Name={comment?.user?.name as string}
                Date={""}
                Rating={comment?.rating as number}
                Review={comment?.review as string}
              />
            );
          })}
        </div>
      </div>
    );
}

export default CustomerReview;

const x = {
  _id: "670c1a4e44473c84722c237e",
  rating: 5,
  review: "nice doctor",
  user: {
    _id: "670911478ee0d2d9d8e4cd5b",
    name: "Jane Doe",
    photo: "https://example.com/new_photo.jpg",
    id: "670911478ee0d2d9d8e4cd5b",
  },
  doctor: "67090f3a3b49c04e0b1a4acc",
  appointment: "67092d1f808de09ed934cf05",
  reported: true,
  createdAt: "2024-10-13T19:06:54.390Z",
  updatedAt: "2024-10-13T19:07:49.549Z",
  __v: 0,
};
