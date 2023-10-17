import React from "react";

const RotateText = ({ word }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-xs font-inter">
      {word.map((item, index) => (
        <span
          className="transform -rotate-90 text-xs"
          style={{ marginRight: "0" }}
        >
          {item === " " ? "\u00A0" : item}
        </span>
      ))}

      <div className="h-2"></div>
      <div className="h-20 w-0.5 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400"></div>
    </div>
  );
};

export default RotateText;
