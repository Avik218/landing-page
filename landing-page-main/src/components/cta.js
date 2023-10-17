import React from "react";

const CTA = () => {
  const ctaStyles = {
    width: "100%",
    height: "270px",
    background:
      "linear-gradient(93.55deg, #1044FC 0%, #C6ACF5 40.61%, #F190DF 70.06%, #FFF5B7 97.95%)",
  };

  return (
    <div
      className="cta flex flex-col items-center justify-center "
      style={ctaStyles}
    >
      <p className="text-black text-4xl font-semibold leading-12 mx-4 text-center">
        Ready to Transform Your Narrative
      </p>
      <p className="text-black text-sm font-semibold leading-12 my-7 mx-4 text-center">
        Let's craft your story together. Reach out for a personalized
        consultation.
      </p>
      <button className="my-7 bg-white w-52 h-12 rounded-sm font-inter text-black">
        Connect With Us
      </button>
    </div>
  );
};

export default CTA;
