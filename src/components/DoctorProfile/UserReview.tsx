import React from "react";
import Star from "../ui/star";

type UserReviewProps = {
  Name: string;
  Date: string;
  Rating: number;
  Review: string;
};
const UserReview = ({ Name, Date, Rating, Review }: UserReviewProps) => {
  return (
    <div className="mt-4 rounded-sm bg-zinc-100 p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-8">
          <h2 className="rounded-md bg-blue-100/40 p-2">{Name}</h2>
          <p className="font-sans">{Date}</p>
        </div>
        <Star value={Rating} />
      </div>

      <p className="mt-4 text-[15px]">{Review}</p>
    </div>
  );
};

export default UserReview;
