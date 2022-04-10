import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function MenuItem({ img, title }) {
  return (
    <Fade>
      <div className=" flex flex-row items-center cursor-pointer hover:opacity-[0.9] overflow-hidden shrink-0">
        <div className="relative rounded-full overflow-hidden shrink-0 ">
          <Image src={img} width={100} height={100} objectFit="contain" />
        </div>
        <h3 className="font-black font-serif text-[16px] ml-4 overflow-hidden shrink-0 ">
          {title}
        </h3>
      </div>
    </Fade>
  );
}

export default MenuItem;
