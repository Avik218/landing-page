import React from "react";
import RotateText from "./rotateText";

const AboutUs = () => {
  const aboutUs = ["S", "U", " ", "T", "U", "O", "B", "A"];

  return (
    <div className=" w-full flex justify-center items-center relative">
      <div className="w-4/5  flex justify-start items-center relative left-0 z-10">
        <RotateText word={aboutUs} />
        <div className="w-10"></div>
        <div className="w-4/5">
          <h2 className="font-inter text-3xl font-bold leading-6 tracking-normal text-left mb-2">
            Who Are We
          </h2>
          <div className="h-10"></div>
          <p className="font-istok text-sm font-normal leading-7 tracking-normal text-left text-gray-300">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-white p-1">
              ViVidBloc.studio
            </span>
            , a realm where creativity knows no bounds. We're not just a video
            production agency; we're your creative confidants. Our approach is
            rooted in a unique blend of storytelling and strategy, designed to
            reflect the world as it truly is. We call it{" "}
            <span className="blue-underline">'Unified Vision,'</span> and it's
            what sets us apart.
          </p>
        </div>
      </div>

      <div className="z-0 w-3/5 relative top-40  right-0 flex justify-end">
        <img src="images/cover.png" alt="cover Image" />
      </div>
    </div>
  );
};

export default AboutUs;
