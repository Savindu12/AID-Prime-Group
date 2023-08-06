import React, {useEffect} from "react";
import house from "../../../assets/About/house.jpeg"
import window from "../../../assets/About/window.jpg"
import residence from "../../../assets/About/residence.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import homeBG from "../../../assets/Home/5570863.jpg"

const AboutDefinition= () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

    return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={backgroundImageStyle}>
      <div data-aos="fade-up" className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl  tracking-widest text-lg font-['Maven Pro'] font-semibold leading-loose text-gray-900 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next{' '}
              <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
            <p className=" tracking-widest text-lg font-['Maven Pro'] font-normal leading-loose text-gray-700 md:text-lg">
            We understand that every space is unique, and that's why we approach each project with a tailored solution, personalized to suit the specific requirements of our clients. From residences to commercial establishments and industrial facilities, we take pride in delivering exceptional cleaning results that go beyond expectations.
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-widest transition-colors duration-200 text-deep-purple-accent-400 hover:text-blue-500"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded transition duration-200 transform shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:-translate-y-2 hover:shadow-2xl"
              src={window}
              alt=""
            />
            
            <img
              className="object-cover w-20 h-20 rounded shadow-lg  transition duration-200 transform sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:-translate-y-2 hover:shadow-2xl"
              src={house}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg transition duration-200 transform sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:-translate-y-2 hover:shadow-2xl"
              src={residence}
              alt=""
            />
            
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutDefinition;