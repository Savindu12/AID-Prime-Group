import React, {useEffect} from "react";
import homeBG from "../../../assets/Home/5570863.jpg"
import sv1 from "../../../assets/Services/sv1.jpg"
import sv2 from "../../../assets/Services/sv8.png"
import sv3 from "../../../assets/Services/sv9.png"
import sv4 from "../../../assets/Services/sv4.jpg"
import sv5 from "../../../assets/Services/sv5.png"
import sv6 from "../../../assets/Services/sv6.png"
import sv7 from "../../../assets/Services/sv10.png"
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceList = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);


    return (
      <div class="bg-white py-6 sm:py-8 lg:py-12" style={backgroundImageStyle}>
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

        <div data-aos="fade-up" class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl tracking-widest font-['Maven Pro'] font-normal leading-loose">Our Services</h2>
    
          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg tracking-widest font-['Maven Pro'] font-normal leading-loose">We present a glimpse of the excellence that AID Prime Group brings to the table, The actual descriptions of our comprehensive range of services.  </p>
        </div>
  
    
        <div data-aos="zoom-in" class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
       
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv1} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">General Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500 font-['Maven Pro'] font-normal leading-loose">Discover the power of transformative cleanliness through Aid Prime Group's General Cleaning Services.Our dedicated team ensures surfaces are rejuvenated, leaving spaces refreshed.</p>
    
          
            </div>
          </div>
  
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white  transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv2} loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">Carpet Streaming and Upholstery Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500 font-['Maven Pro'] font-normal leading-loose">Our specialized techniques breathe new life into fabrics, leaving them revitalized. From carpets to furniture, we restore the allure of your interiors.</p>
    
              
            </div>
          </div>
          
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv3} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">Scrubbing and Buffing Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500 font-['Maven Pro'] font-normal leading-loose">Our expert methods bring a renewed shine, leaving surfaces gleaming. From scrubbing to buffing, we redefine the brilliance of your spaces. </p>
    
              
            </div>
          </div>

          <div class="flex flex-col overflow-hidden rounded-lg border bg-white transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv4} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">Tile and Grout Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500 font-['Maven Pro'] font-normal leading-loose">Rediscover the beauty of your tiles our specialized techniques bring back their original luster, leaving surfaces pristine.From tiles to grout lines, we revitalize your spaces. </p>
    
              
            </div>
          </div>
          
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv5} loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">Interior and Exterior Window Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500 font-['Maven Pro'] font-normal leading-loose">Experience the clarity of your world with AID Prime Group's Interior and Exterior Window Cleaning. Our meticulous approach restores crystal-clear views, leaving windows immaculate. </p>
    
             
            </div>
          </div>

          <div class="flex flex-col overflow-hidden rounded-lg border bg-white transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv6} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">Graffiti Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500  font-['Maven Pro'] font-normal leading-loose"> Our expert techniques remove unwanted markings, leaving walls restored. From graffiti-covered areas to clean canvases, we bring back the original allure.</p>
    
              
            </div>
          </div>

          <div class="flex flex-col overflow-hidden rounded-lg border bg-white transition duration-300 ease-in-out transform hover:-translate-y-5">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src={sv7} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800">
                <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 tracking-widest font-['Maven Pro'] font-normal leading-loose">Pressure Washing and Cleaning</a>
              </h2>
    
              <p class="mb-8 text-gray-500 font-['Maven Pro'] font-normal leading-loose"> Our high-pressure techniques eliminate grime, leaving exteriors refreshed. From stubborn stains to clean slates, we redefine the allure of your spaces.</p>
    
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ServiceList;