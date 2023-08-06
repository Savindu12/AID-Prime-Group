import React, {useEffect} from "react";
import house from "../../../assets/About/house.jpeg"
import window from "../../../assets/About/window.jpg"
import residence from "../../../assets/About/residence.jpg"
import industrial from "../../../assets/Services/industrial.jpg"
import endoflease from "../../../assets/Services/endoflease.jpg"
import surface from "../../../assets/Services/surface.jpg"
import vaccum from "../../../assets/Services/vaccum.jpg"
import homeBG from "../../../assets/Home/Art2.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Partners = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);


    return (
      <div style={backgroundImageStyle}>
  <section class="px-4 py-24 mx-auto max-w-7xl z-50">
      <h2 data-aos="fade-up" class="mb-2 text-3xl tracking-widest font-['Maven Pro'] font-bold leading-loose leading-tight text-gray-900 ">Our Services</h2>
      <p data-aos="fade-up" class="mb-20 text-lg tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">We take pride in providing a wide range of professional cleaning services to meet the diverse needs of our valued clients.</p>
      <div data-aos="fade-up" class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <a href="#">
            <img src={house} class="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 transform hover:scale-105 " alt="Kutty" loading="lazy" />
          </a>
          <h1 class="mb-2 text-lg font-semibold text-gray-900">
            <a href="#" class="text-gray-900 hover:text-purple-700">Commercial Cleaning Services</a>
          </h1>
          <p class="mb-3 text-sm tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">
          we provide top-tier commercial cleaning services to businesses of all sizes. Our expert team is committed to maintaining a clean and sanitary environment for your workplace, ensuring a professional and welcoming atmosphere for your employees and clients. 
          </p>
        </div>
        <div>
          <a href="#">
            <img src={industrial} class="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 transform hover:scale-105 " alt="Kutty" loading="lazy" />
          </a>
          <h1 class="mb-2 text-lg font-semibold text-gray-900">
            <a href="#" class="text-gray-900 hover:text-purple-700">Industrial Cleaning Services</a>
          </h1>
          <p class="mb-3 text-sm tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">
          AID Prime Group offers top-notch industrial cleaning services designed to meet the unique demands of businesses in various industrial sectors. Our expert team is equipped with the knowledge and tools to tackle challenging industrial environments effectively.
          </p>
        </div>
        <div>
          <a href="#">
            <img src={residence} class="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 transform hover:scale-105" alt="Kutty" loading="lazy" />
          </a>
          <h1 class="mb-2 text-lg font-semibold text-gray-900">
            <a href="#" class="text-gray-900 hover:text-purple-700">Residence Cleaning Services</a>
          </h1>
          <p class="mb-3 text-sm tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">
          AID Prime Group offers exceptional residence cleaning services to help you maintain a spotless and inviting home. Our dedicated team of cleaning professionals understands the importance of a clean living space and strives to deliver outstanding results with every visit.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <a href="#">
            <img src={endoflease} class="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 transform hover:scale-105" alt="Kutty" loading="lazy" />
          </a>
          <h1 class="mb-2 text-lg font-semibold text-gray-900">
            <a href="#" class="text-gray-900 hover:text-purple-700">End of Lease Cleaning Services</a>
          </h1>
          <p class="mb-3 text-sm tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">
          AID Prime Group offers comprehensive end of lease cleaning services to ensure a smooth and hassle-free transition for both tenants and landlords. When your lease comes to an end, our expert cleaning team will handle all the necessary tasks to restore the property to its pristine condition.
          </p>
        </div>
        <div>
          <a href="#">
            <img src={surface} class="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 transform hover:scale-105" alt="Kutty" loading="lazy" />
          </a>
          <h2 class="mb-2 text-lg font-semibold text-gray-900">
            <a href="#" class="text-gray-900 hover:text-purple-700">Surface Sanitization</a>
          </h2>
          <p class="mb-3 text-sm tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">AID Prime Group provides expert surface sanitization services to create a safe and hygienic environment for homes and businesses. Our thorough and effective sanitization process targets high-touch surfaces, eliminating harmful bacteria, viruses, and germs.</p>
        
        </div>
        <div>
          <a href="#">
            <img src={vaccum}class="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 transform hover:scale-105" alt="Kutty" loading="lazy" />
          </a>
          <h2 class="mb-2 text-lg font-semibold text-gray-900">
            <a href="#" class="text-gray-900 hover:text-purple-700">Industrial Vaccuming</a>
          </h2>
          <p class="mb-3 text-sm tracking-widest font-['Maven Pro'] font-normal leading-loose text-gray-500">
          AID Prime Group offers specialized industrial vacuuming services to effectively remove dust, debris, and contaminants from industrial settings. Our industrial vacuuming solutions are designed to handle large-scale cleaning requirements and ensure a safe and clean working environment.
          </p>
        </div>
      </div>
    </section> 
      </div>
                          
    )
}

export default Partners;