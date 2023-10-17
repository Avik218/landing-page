import React from "react";
const imageArray = [
  {
    imageName: "work1",
    caption: "Video Production",
  },
  {
    imageName: "work2",
    caption: "Talent Management",
  },
  {
    imageName: "work3",
    caption: "Personal Branding",
  },
  {
    imageName: "work4",
    caption: "Event Management",
  },
];

const ImageCard = ({ imageName, text }) => {
  return (
    <div className="w-1/4 relative my-10">
      <img
        src={"images/" + imageName + ".png"}
        alt="Image"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-end justify-center text-white bg-black bg-opacity-50 p-4">
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default function OurCraft() {
  return (
    <>
      <div className="text-center">
        <h2 className="font-inter text-3xl font-bold leading-6 tracking-normal mb-2">
          Our Craft
        </h2>
      </div>
      <div className="flex flex-row space-x-4">
        {imageArray.map((item, index) => (
          <ImageCard
            key={index}
            imageName={item.imageName}
            text={item.caption}
          />
        ))}
      </div>
    </>
  );
}
