import React from "react";
import FooterBG  from "../../../assets/Logo/Horizontal.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={FooterBG} alt="logo tailus" class="w-44 m-auto" />
            </a>

            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-800 font-['Maven Pro'] font-normal leading-loose tracking-widest">
              AID Prime Group has achieved remarkable success in building a substantial customer base through its commitment to excellence in the cleaning service industry. 
              AID Prime Group continues to earn trust and loyalty, solidifying our position as a leader in the cleaning service industry.
              </p>  
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
           
            <div class="px-4 sm:px-6 lg:col-span-4 lg:px-8">
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span class="tracking-widest font-['Maven Pro'] font-semibold leading-loose text-gray-800 text-xl">
            Call us
          </span>

          <a
            href="#"
            class="block text-2xl font-medium text-gray-900 hover:opacity-75 text-blue-900 sm:text-3xl duration-300 transform hover:translate-x-2 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
            <span class = "ml-2">   0452 204 545 </span>
       
          </a>
        </p>

        <ul class="mt-8 space-y-1 text-lg tracking-widest font-['Maven Pro'] text-gray-700">
          <li class="font-bold mb-4 duration-300 transform hover:translate-x-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
 <span class = "ml-4" >info@aidprimegroup.com</span>
</li>
          <li class = "duration-300 transform hover:translate-x-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg> <span class = "mr-4 inline">455 Princess Hwy, Narre Warren <span class = "ml-8">VIC 3805</span></span>
</li>
        </ul>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p class="tracking-widest font-['Maven Pro'] font-bold leading-loose text-gray-800 text-xl">Services</p>

          <ul class="mt-6 space-y-4 text-sm ">
            <li class = "duration-300 transform hover:translate-x-2">
              <Link to ="/services" class="text-gray-700 text-[20px] transition hover:opacity-75">
                Residential
              </Link>
            </li>

            <li class = "duration-300 transform hover:translate-x-2">
              <Link to ="/services" class="text-gray-700 text-[20px] transition hover:opacity-75">
                Commercial
              </Link>
            </li>

            <li class = "duration-300 transform hover:translate-x-2">
              <Link to = "/services" class="text-gray-700  text-[20px] transition hover:opacity-75">
                Industrial
              </Link>
            </li>

            <li class = "duration-300 transform hover:translate-x-2">
              <Link to ="/services" class="text-gray-700 text-[20px] transition hover:opacity-75">
                General
              </Link>
            </li>

            <li class = "duration-300 transform hover:translate-x-2">
              <Link to = "/services" class="text-gray-700 text-[20px] transition hover:opacity-75 flex flex-row">
                End of Lease
              </Link>
            </li>
          </ul>
        </div>

        <div class="px-8">
          <p class="tracking-widest font-['Maven Pro'] font-bold leading-loose text-gray-800 text-xl">Company</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li class = "duration-300 transform hover:translate-x-2">
              <Link to = "/about" class="text-gray-700 text-[20px] transition hover:opacity-75">
                About
              </Link>
            </li>

            <li class = "duration-300 transform hover:translate-x-2">
              <Link to= "/faq" class="text-gray-700  text-[20px] transition hover:opacity-75">
                FAQs
              </Link>
            </li>

            <li class = "duration-300 transform hover:translate-x-2">
              <Link to = "/services" class="text-gray-700 text-[20px] transition hover:opacity-75">
               Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

            
        </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-gray-600 font-['Maven Pro'] font-normal leading-loose tracking-widest align-middle">
            © Copyright 2023 AIDPrime Group. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 text-gray-700 transition hover:opacity-75 " > 
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 ">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Footer