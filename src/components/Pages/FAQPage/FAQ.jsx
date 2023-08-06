import React, {useEffect} from "react";
import { useState } from "react";
import homeBG from "../../../assets/Home/5570863.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect (() => {
      Aos.init({duration:2000});
  },[]);

    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium font-['Maven Pro'] font-semibold leading-loose">{title}</p>

          <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 text-gray-600 transform transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        </button>
        {isOpen && (
          <div className="pt-0 mb-4">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {

    const backgroundImageStyle = {
      backgroundImage: `url("${homeBG}")`,
      backgroundSize: "cover",
    };
    
    return (


<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" style={backgroundImageStyle}>

  <div class="grid md:grid-cols-5 gap-10">
    <div data-aos="fade-right" class="md:col-span-2">
      <div class="max-w-xs">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-black">Frequently<br/>asked questions</h2>
        <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-500">Answers to the most frequently asked questions.</p>
      </div>
    </div>


    <div data-aos="fade-left" class="md:col-span-3">
          
      <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
      
      <Item title="What services does AID Prime Group offer?">
         <p class = "text-md tracking-widest font-['Maven Pro'] font-normal leading-loose ">    
         AID Prime Group Cleaning Company provides a comprehensive range of cleaning services for both residential and commercial amd industrial clients. Our offerings include regular house cleaning, office cleaning, deep cleaning, carpet and upholstery cleaning, window cleaning, and post-construction cleaning, among others.
          </p>    
          </Item>
        <Item title="Does AID Prime Group Cleaning Company provide customized cleaning plans?">
         <p class = "text-md tracking-widest font-['Maven Pro'] font-normal leading-loose">    
         Yes! We offer customized cleaning plans tailored to your specific requirements. Whether you need a one-time deep cleaning or a recurring cleaning schedule, we'll work with you to create a plan that suits your preferences and budget.
          </p>    
          </Item> 

        <Item title=" Does AID Prime Group Cleaning Company use eco-friendly cleaning products?">
         <p class = "text-md tracking-widest font-['Maven Pro'] font-normal leading-loose">    
         We prioritize the use of eco-friendly and non-toxic cleaning products that are safe for both our clients and the environment. By choosing AID Prime Group Cleaning Company, you contribute to sustainability efforts while enjoying a clean and healthy living or working space.
          </p>    
          </Item>  

          <Item title=" How can I schedule cleaning services with AID Prime Group Cleaning Company?">
         <p class = "text-md tracking-widest font-['Maven Pro'] font-normal leading-loose">    
         You can easily book our services through our website or by contacting our customer support team. We offer flexible time slots to accommodate your busy schedule, and our team will work with you to find the best cleaning plan that meets your needs.
          </p>    
          </Item>  

          
          <Item title="Are the prices competitive at AID Prime Group Cleaning Company?">
         <p class = "text-md tracking-widest font-['Maven Pro'] font-normal leading-loose">    
         Our pricing is designed to be fair and reflective of the quality and value we provide. Additionally, we may have special promotions and discounts from time to time to make our services even more accessible to our valued customers.
          </p>    
          </Item> 

        
      </div>
    </div>
  </div>
  </div>

    );
  };