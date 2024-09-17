import React from "react";
import Star from "../ui/star";
import Badge from "../ui/badge";
import { MdGroups2 } from "react-icons/md";
import UserReview from "./UserReview";

const CustomerReview = () => {
  return (
    <div className="mt-4 min-h-[28rem] rounded-3xl bg-zinc-300 p-4">
      <h2 className="text-center">Customers Reviews</h2>

      <div className="rounded-3xl bg-zinc-800 p-8">
        <div className="flex items-center justify-center gap-x-2">
          <h3 className="text-zinc-50">Average Rating</h3>
          <Star />
        </div>

        <div className="mt-2 flex items-center justify-center gap-x-2">
          <h3 className="text-zinc-50">Based on</h3>
          <Badge
            icon={<MdGroups2 size={20} className="text-zinc-800" />}
            className="bg-zinc-50 text-zinc-800"
            text={"3361"}
          />
        </div>
      </div>

      {/* Reviews */}
      <div>
        <UserReview
          Name="Mohamed Ahmed Awad Ahmed"
          Date="2024-10-02"
          Rating={4}
          Review="The last boss is impossible to beat, I can’t think of any possible strategies, nothing works.Finding inspiration was never issue for me, I always had good imagination.and thank you"
        />
      </div>
    </div>
  );
};

export default CustomerReview;
