import React, {useEffect} from "react";
import homeBG from "../../../assets/Home/5570863.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Steps = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"  style={backgroundImageStyle}>
        <div data-aos="fade-up" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-x1 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
             Frequently Asked Questions
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Exploration of FAQs for clarity and convenience
          </h2>
          <p className="text-base text-gray-700 md:text-lg tracking-widest font-['Maven Pro'] font-normal leading-loose">
          Check out our comprehensive FAQ section to find quick solutions to common queries.
           From pricing to service details, 
          get the information you need to make an informed decision
          </p>
        </div>
        
        <div data-aos="zoom-out" className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 group-hover:text-white">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 transition duration-200">
            <div className="flex items-center justify-between mb-2 transition duration-200 ">
              <span className="text-lg font-bold leading-5 tracking-widest font-['Maven Pro'] font-bold leading-loose">Call Us</span>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50 ">
                1
              </p>
            </div>
            <p className="text-sm text-gray-900 tracking-widest font-['Maven Pro'] font-normal leading-loose">
            Our dedicated team is ready to address your cleaning needs with professionalism and efficiency.
            </p>
          </div>
          
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5 tracking-widest font-['Maven Pro'] font-bold leading-loose">Schedule a Date</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2
              </p>
            </div>
            <p className="text-sm text-gray-900 tracking-widest font-['Maven Pro'] font-normal leading-loose">
            Our flexible scheduling ensures your convenience. Get started with Book your cleaning date today!
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5 tracking-widest font-['Maven Pro'] font-bold leading-loose">Arrangement</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                3
              </p>
            </div>
            <p className="text-sm text-gray-900 tracking-widest font-['Maven Pro'] font-normal leading-loose">
            Trust us for a seamless arrangement that transforms your environment. Discover the ease of a well-arranged clean. 
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5 tracking-widest font-['Maven Pro'] font-bold leading-loose">Relaxtion</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                4
              </p>
            </div>
            <p className="text-sm text-gray-900 tracking-widest font-['Maven Pro'] font-normal leading-loose">
            Let us handle the cleaning while you focus on unwinding. Discover a new level of relaxation with AID Prime Group.
            </p>
          </div>
        </div>
        <div className="text-center ">
          <Link
            to= "/contact"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Request Now
          </Link>
        </div>
      </div>
    )
}

export default Steps;