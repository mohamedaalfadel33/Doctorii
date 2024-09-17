import Image from "next/image";
import React from "react";

const Header = () => {
  return (
 
      <div className="flex items-center gap-8">
        <Image
          src="/1584844567410.jpeg"
          alt="doctor"
          width={150}
          height={1}
          className="rounded-full border-[3px] border-zinc-800"
        />
        <h2 className="text-4xl">Hello,Mohamed ALGay</h2>
      </div>

  );
};

export default Header;
