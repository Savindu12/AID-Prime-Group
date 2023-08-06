import React from "react";
import HomeBG from "../../../assets/About/Abouthome.jpg"
import home from "../../../assets/About/about.png"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const backgroundImageStyle = {
  backgroundImage: `url("${HomeBG}")`,
  backgroundSize: "cover",
  opacity: 0.8, 
};

const AboutHome = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect (() => {
    Aos.init({duration:2000});
},[]);


    return (
      <div className="relative bg-opacity-40 " style={backgroundImageStyle}>
        <div className="bg-purple-700 bg-opacity-40 px-30 backdrop-blur-sm">
          
  <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
      <div className="flex flex-col items-center max-w-2xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h1 className="max-w-lg mb-6 mt-10 text-4xl  tracking-widest text-lg font-['Maven Pro'] font-semibold leading-loose text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
           About AID Prime Group
          </h1>
          <p className="tracking-widest text-lg font-['Maven Pro'] font-normal leading-loose text-white md:text-lg">
          We believe that every space tells a story, and we enrich these narratives with the beauty of cleanliness.
          </p>
        </div>
      </div>
      <img
        src={home}
        className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
        alt=""
      />
    </div>
      </div>
      </div>
    )
}

export default AboutHome;