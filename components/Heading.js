import React from "react";

function Heading({ text }) {
  return (
    <div className="w-full flex items-center justify-center  bg-gray-200 h-[150px] text-[50px] md:text-[70px] text-black font-semibold  font-serif ">
        <h1 className="text-center">{text}</h1>
        </div>
  );
}

export default Heading;
