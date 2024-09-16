import { cn } from "@/lib/utils";
import React from "react";

type badgeProps = {
  icon?: JSX.Element;
  text: string | number;
  className?: string;
};

const Badge = ({ icon, text, className }: badgeProps) => {
  return (
    <div
      className={cn(
        `flex w-fit items-center gap-2 rounded-full bg-slate-400 px-4 py-[1px] text-zinc-50 ${className} `,
      )}
    >
      {icon}
      <span className="font-sans">{text}</span>
    </div>
  );
};

export default Badge;
