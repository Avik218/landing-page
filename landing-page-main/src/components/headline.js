import React from "react";

export default function Headline() {
  return (
    <div className="flex items-center justify-end w-1/1 relative">
      <div className="flex items-center justify-start w-1/1 ">
        <div className="flex flex-col items-start justify-center w-3/4 z-10 absolute left-20">
          <img src="images/logo2.png" alt="cover Image" />
          <div className="flex items-center justify-start">
            <h2 className="font-inter text-3xl font-bold leading-6 tracking-normal text-left mb-2 ">
              Where Your{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-white p-1">
                Story Takes Center Stage
              </span>
            </h2>
            &nbsp;&nbsp;&nbsp;
            <img src="images/play.png" alt="cover Image" />
          </div>
          <h2 className="text-white text-lg font-semibold mb-10">
            Changing the Conversation, One Frame at a Time
          </h2>
          <h2 className="text-white text-md font-semibold mt-4 purple-underline">
            Discover Your Story
          </h2>
        </div>
      </div>

      <img
        src="images/header.png"
        alt="cover Image"
        className="relative right-0 z-0"
      />
    </div>
  );
}
