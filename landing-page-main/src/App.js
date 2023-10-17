import AboutUs from "./components/aboutUs";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Headline from "./components/headline";
import OurCraft from "./components/ourCraft";
import TestimonialCard from "./components/testimonialCard";
import Testimonials from "./components/testimonials";

export default function App() {
  return (
    <>
      <div className="horizontal-margin-10 ">
        <div className="flex items-center my-5 ">
          <img src="images/logo.png" alt="Company Logo" />
        </div>
      </div>
      <Headline />
      <div className="horizontal-margin ">
        <AboutUs />
      </div>
      <div className="h-80"></div>
      <OurCraft />
      <div className="h-60"></div>
      <div className="horizontal-margin ">
        <Testimonials />
      </div>
      <div className="h-40"></div>
      <div className="horizontal-margin ">
        <TestimonialCard />
      </div>
      <div className="h-80"></div>
      <CTA />
      <div className="h-80"></div>
      <div className="horizontal-margin ">
        <Footer />
      </div>
    </>
  );
}
