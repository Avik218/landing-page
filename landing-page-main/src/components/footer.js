import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="container mx-auto py-4  items-center justify-between flex lg:flex-col">
        <div className="flex items-center ">
          <img src="images/logo.png" alt="Company Logo" />
        </div>

        <div className="flex justify-center space-x-12 w-1/3">
          <a href="#" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Our Craft
          </a>
          <a href="#" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <img src="images/linkedin.png" alt="Logo 1" />
          <img src="images/x.png" alt="Logo 2" />
          <img src="images/instagram.png" alt="Logo 3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
