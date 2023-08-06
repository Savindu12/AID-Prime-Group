import React from "react";
import { useState, useEffect } from 'react'
import Typed from 'react-typed'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bgImage from "../../../assets/image2.jpg"
import bgImage1 from "../../../assets/image3.jpg"
import bgImage2 from "../../../assets/image4.jpg"
import bgImage3 from "../../../assets/image5.jpg"
import bgImage4 from "../../../assets/image6.jpg"
import bgImage5 from "../../../assets/image7.jpg"
import { Carousel } from "react-responsive-carousel";
import "./Services.css"

const ServiceHome = () => {

    // const backgroundImageStyle = {
    //     backgroundImage: `url("${bgImage}")`,
    //     backgroundSize: "cover",
    //     opacity: 0.8, 
    //   };

      const [currentSlide, setCurrentSlide] = useState(0);

      const images = [bgImage, bgImage1, bgImage2, bgImage3, bgImage4, bgImage5]; // Add more images as needed
    
      const handleChange = (index) => {
        setCurrentSlide(index);
      };
    
      const backgroundImageStyle = {
        backgroundImage: `url("${images[currentSlide]}")`,
        backgroundSize: "cover",
        opacity: 0.8,
      };

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (

        <div className="relative isolate px-6 lg:px-8 bg-opacity-20 " style={backgroundImageStyle}>
             <div className="bg-cyan-700 bg-opacity-20 px-30 backdrop-blur-sm ">

                <Carousel
        autoPlay
        interval={5000} // Adjust the interval (in milliseconds) for the carousel to change slides
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        onChange={handleChange}
        
      >
        {images.map((image, index) => (
          <div key={index}>
            <div src={image} alt={`Carousel Image ${index + 1}`} style={{backgroundSize: "cover"}}/>
          </div>
        ))}
      </Carousel>  

          <div className="absolute inset-x-0 bottom-0"></div>
          
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            <span class = "block">Empower to enrich our</span>   <span><Typed
            className="md:text-5xl sm:text-4xl text-4xl font-bold md:pl-4 text-cyan-600 font-['Maven Pro'] tracking-widest leading-loose"
              strings={["Commercial", "Industrial", "Residential"]}
              typeSpeed={40}
              backSpeed={50}
             
              loop
            /> </span> Cleaning
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            Discover a range of expert cleaning solutions tailored to your needs. Explore our diverse range of services to find the perfect cleaning solution for your requirements.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      </div>
    )
}

export default ServiceHome;