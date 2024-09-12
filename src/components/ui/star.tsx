import { Rating } from "@mui/material";
import { StarIcon } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Star = () => {
  const x = 4;
  return (
    <div className="flex w-36 justify-center rounded-full bg-zinc-50 p-1">
      <Rating
        emptyIcon={<FaRegStar size={20} color="#567F9D" />}
        icon={<FaStar size={20} color="#567F9D" />}
        value={x}
        name="read-only"
      />
    </div>
  );
};

export default Star;
