import React from "react";
import RotateText from "./rotateText";

const Testimonials = () => {
  const testimonials = [
    "S",
    "L",
    "A",
    "I",
    "N",
    "O",
    "M",
    "I",
    "T",
    "S",
    "E",
    "T",
  ];
  return (
    <div className=" w-full flex justify-center items-center relative">
      <div className="w-4/5  flex justify-start items-center relative left-0 z-10">
        <RotateText word={testimonials} />
        <div className="w-10"></div>
        <div className="w-4/5">
          <h2 className="font-inter text-3xl font-bold leading-6 tracking-normal text-left mb-2">
            Voices Of Our Tribe
          </h2>
          <div className="h-10"></div>
          <p className="font-istok text-sm font-normal leading-7 tracking-normal text-left text-gray-300">
            Meet the brands and individuals who've transformed their stories
            with us. Real narratives, real impact
          </p>
        </div>
      </div>
      <div className="z-0 w-3/5 relative top-40  right-0 flex justify-end"></div>
    </div>
  );
};

export default Testimonials;
