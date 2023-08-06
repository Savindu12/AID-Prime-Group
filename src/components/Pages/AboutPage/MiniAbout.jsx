import React, {useEffect} from "react";
import FooterBG  from "../../../assets/Logo/Horizontal.png"
import homeBG from "../../../assets/Home/5570863.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const MiniAbout = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

    return (
      <div >
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 " style={backgroundImageStyle}>
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div data-aos="fade-right"  className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-36">
          <img src={FooterBG} alt="logo tailus" class="w-96 m-auto transition duration-500 transform hover:scale-110" />
          </div>
          <div data-aos="fade-up"  className="lg:w-1/2">
            <p className="mb-4 tracking-widest text-lg font-['Maven Pro'] font-normal leading-loose text-gray-700">
            Experience the AID Prime Group difference today and let us transform your space into a cleaner, healthier, and more vibrant environment. We look forward to serving you with utmost professionalism and making a lasting impact on your cleaning needs.
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
      
    )
}

export default MiniAbout;