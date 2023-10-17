import React from "react";

const TestimonialCard = () => {
  const gradientBackground = {
    background:
      "linear-gradient(270deg, rgba(23, 23, 23, 0) -3.29%, #171717 56.77%, rgba(23, 23, 23, 0) 100%)",
    width: "60%",
    height: "430px",
  };
  return (
    <div className="flex flex-col items-center justify-end ">
      <div className="flex items-center justify-center w-1/1 h-300">
        <div
          className="flex items-center justify-center w-1/2 relative lg:flex-row flex-col"
          style={gradientBackground}
        >
          <img
            src="images/quote.png"
            alt="Testimonial"
            className="absolute z-0  right-5 bottom-25"
          />
          <img
            src="images/cardImage.png"
            alt="Testimonial"
            className="mr-4 mb-10 sm:mb-0"
          />
          <div className="flex flex-col">
            <h2 className="text-white text-4xl font-semibold mb-2">Woah.</h2>
            <p className="text-white-600 w-3/4 text-sm">
              “The video is fantastic, and has been really well received by
              those I’ve shared it with. Our CEO described it is ‘sensational’
              and said it made his day.”
            </p>
            <p className="text-white mt-2 font-semibold">Jane Doe</p>
            <p className="text-gray-400 mt-1">SomeCompany LLC.</p>
            <p className="text-blue-400 mt-3">https://somecompanyllc.co</p>
          </div>
        </div>
      </div>
      <img src="images/carousel.png" alt="Logo 3" className="mt-20" />
    </div>
  );
};

export default TestimonialCard;
