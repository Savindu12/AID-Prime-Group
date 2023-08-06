import React, {useEffect} from "react";
import Recidential from "../../../assets/Services/sv11.png"
import Industrial from "../../../assets/Services/industrial2.jpg"
import commercial from "../../../assets/Services/sv12.png"
import endOfLease from "../../../assets/Services/endoflease.jpg"
import homeBG from "../../../assets/Home/5570863.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={backgroundImageStyle}>
        <div data-aos="zoom-out" className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-['Maven Pro'] tracking-widest leading-loose font-semibold text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              In the realm of cleanliness, 
              <br className="hidden md:block" />
              No obligation reigns
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-lg lg:max-w-md">
            "AID Prime Group offers personalized quotations for our range of cleaning services, including residential, 
            commercial, industrial, and end of lease cleaning. Get started on the path to a cleaner environment with AID Prime Group."
          </p>
        </div>
        <div data-aos="zoom-out" className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Recidential}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-indigo-800 bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Residential Cleaning</p>
                <p className="text-sm tracking-wide text-gray-300">
                Residential cleaning services involve professional cleaning solutions designed for homes. These services encompass tasks like dusting, vacuuming, sanitizing, and tidying up living spaces.  
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={commercial}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-blue-500 bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                    Commercial Cleaning
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                Commercial cleaning services encompass specialized cleaning solutions tailored for businesses and commercial establishments. We utilize advanced techniques, equipment, and eco-friendly products to ensure optimal cleanliness.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Industrial}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-blue-800 bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Industrial Cleaning</p>
                <p className="text-sm tracking-wide text-gray-300">
                Industrial cleaning services encompass specialized cleaning solutions tailored for manufacturing plants, warehouses, and other industrial facilities.We focused on maintaining cleanliness, safety, and operational efficiency in challenging industrial environments.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={endOfLease}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-indigo-800 bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  End of Lease Cleaning
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                End of lease cleaning services, also known as move-out cleaning services, refer to professional cleaning solutions designed for rental properties when tenants are transitioning out. Ensuring it meets the requirements of the lease agreement and preparing it for the next occupants.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
}

export default Services;