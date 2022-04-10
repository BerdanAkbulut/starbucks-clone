import React from "react";
import Image from 'next/image'


function Featured({
  title,
  info,
  link,
  path,
  image,
  order,
  background,
  color,
  className,
}) {
  return (
      
      <div className={`w-full overflow-y-hidden p-10 items-center flex flex-col-reverse md:flex-row justify-center md:justify-around h-full md:h-[650px]  ${background}`}>
          <div className={`flex flex-col items-center justify-center ${color} `}>
              <h1 className="text-[50px] text-center font-mono font-semibold tracking-wide w-[350px] leading-snug ">{title}</h1>
              <h3 className="text-[20px] mt-4 font-mono  w-[350px] text-center ">{info}</h3>
              <div className={`w-[250px] mt-8 p-2 text-center bg-red-800 rounded-full cursor-pointer transition-all ease-in-out hover:bg-red-400 text-white `}>{link}</div>
          </div>
         <div className="relative ">
            <Image src={image} objectFit="fill" width={800} height={700} />
         </div>
      </div>
  )
}

export default Featured;
