import React, {useEffect} from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import AboutService from "./aboutservice";
import Aos from "aos";
import "aos/dist/aos.css";


import homeBG from "../../../assets/Home/Art2.jpg"
const About = () => {
  
  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);


    return (
 <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={backgroundImageStyle}>
      <div data-aos="fade-up" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-widest font-['Maven Pro'] font-semibold leading-loose text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quality you deserve, <br></br>A service you can trust.
        </h2>
        <p className="text-base font-['Maven Pro'] tracking-widest text-gray-700 md:text-lg">
        The foundation of our commitment to excellence. At AID Prime Group,
         we believe that every client deserves the highest standard of cleaning services delivered with unwavering reliability and integrity. 
        </p>
      </div>
      </div>
     
    )
}

export default About;