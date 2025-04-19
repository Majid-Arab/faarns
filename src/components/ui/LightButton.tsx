import React from "react";

type Prop = {
  text: string;
};

const LightButton = ({ text }: Prop) => {
  return (
    <button className="border-1 border-white text-md md:text-xl rounded-full bg-[#ffffff26] bg-light text-white px-[25px] py-[5px]">
      {text}
    </button>
  );
};

export default LightButton;
