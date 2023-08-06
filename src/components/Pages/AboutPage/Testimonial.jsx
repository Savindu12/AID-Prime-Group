import React, {useEffect} from "react";
import test1 from "../../../assets/test4.jpg"
import test2 from "../../../assets/test2.jpg"
import test3 from "../../../assets/test3.jpg"
import homeBG from "../../../assets/Home/5570863.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {

    const backgroundImageStyle = {
        backgroundImage: `url("${homeBG}")`,
        backgroundSize: "cover",
      };

    useEffect (() => {
        Aos.init({duration:2000});
    },[]);

    return (
        <div class="py-16" style={backgroundImageStyle}>
        <div data-aos="fade-up"  class="xl:container m-auto px-6 text-gray-600  md:px-12 xl:px-6">
          <h2 class="mb-12 text-center text-2xl font-bold text-gray-800 md:text-4xl font-['Maven Pro'] font-normal leading-loose">
            What's our customers say
          </h2>
          <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div
              class="row-span-2 rounded-3xl border border-gray-100 bg-gray-200  p-8 text-center shadow-2xl shadow-gray-600/10  transform hover:-translate-y-2 transition duration-300"
            >
              <div class="flex h-full flex-col justify-center space-y-4">
                <img
                  class="mx-auto h-20 w-20 rounded-full"
                  src={test3}
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p class="md:text-xl">
                  <span class="font-serif">"</span> Our office has never looked better since partnering with AID Prime Group for commercial cleaning. Their team consistently goes above and beyond, delivering a workspace that impresses both our employees and clients. The level of cleanliness they maintain has significantly improved the overall atmosphere. <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold font-['Maven Pro'] font-normal leading-loose">Binara Prabashwara</h6>
                  <span class="text-xs text-gray-500">Marketing Manager</span>
                </div>
              </div>
            </div>
      
            <div class="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-gray-200 p-8 text-center shadow-2xl shadow-gray-600/10  transform hover:-translate-y-2 transition duration-300">
              <img
                class="mx-auto h-20 w-20 rounded-full"
                src={test2}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p >
                  <span class="font-serif">"</span> AID Prime Group exceeded all my expectations with their residential cleaning service. The team was thorough, professional, and left my home sparkling clean. I was truly impressed by their attention to detail and dedication to ensuring every corner was addressed. I highly recommend their services to anyone seeking top-notch cleaning for their homes.

<span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold font-['Maven Pro'] font-normal leading-loose">Tharusha Gallage</h6>
                  <span class="text-xs text-gray-500">UI/UX Engineer</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-gray-200  p-8 text-center shadow-2xl shadow-gray-600/10  transform hover:-translate-y-2 transition duration-300">
              <img
                class="mx-auto h-20 w-20 rounded-full"
                src={test1}
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span class="font-serif">"</span> I can't express enough how pleased I am with AID Prime Group's commercial cleaning services. As a retail manager, maintaining a clean and welcoming space is crucial. Their team consistently delivers exceptional results, ensuring our store always looks its best. <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold font-['Maven Pro'] font-normal leading-loose">Thilini Herath</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>                               
    )
}

export default Testimonial;