import React, {useEffect} from "react";
import Recidential from "../../../assets/Services/residential.jpg"
import Industrial from "../../../assets/Services/industrial.jpg"
import commercial from "../../../assets/Services/commercial.jpg"
import endOfLease from "../../../assets/Services/endoflease.jpg"
import homeBG from "../../../assets/Home/5570863.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceDefinition =() => {

  const backgroundImageStyle = {
    backgroundImage: `url("${homeBG}")`,
    backgroundSize: "cover",
  };

  useEffect (() => {
    Aos.init({duration:2000});
},[]);


    return (
        <section class="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3" style={backgroundImageStyle}>
 <div data-aos="fade-right"  class="flex flex-wrap mx-auto md:flex-nowrap p-12">

<a href="">
  <div class="flex w-full">
    <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
      <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={Recidential} alt="blog"/>
      <div class="px-6 py-8">
        <h4 class="mt-4 text-2xl font-semibold text-neutral-600 tracking-widest font-['Maven Pro'] leading-loose">
          <span class="">Residential Cleaning</span>
        </h4>
        <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Our dedicated team specializes in providing tailored cleaning solutions that cater to your unique needs. Experience a pristine living environment with our residential cleaning expertise.</p>
      </div>
    </div>
  </div>
</a>

<a href="">
  <div class="flex w-full">
    <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
      <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={commercial} alt="blog"/>
      <div class="px-6 py-8">
        <h4 class="mt-4 text-2xl font-semibold text-neutral-600 tracking-widest font-['Maven Pro'] leading-loose">
          <span class="">Commercial Cleaning</span>
        </h4>
        <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Ensuring a professional and inviting atmosphere. From offices to retail spaces, we deliver excellence in every corner. Elevate your business environment with our top-tier commercial cleaning solutions.</p>
      </div>
    </div>
  </div>
</a>


<a href="">
  <div class="flex w-full">
    <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
      <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={Industrial} alt="blog"/>
      <div class="px-6 py-8">
        <h4 class="mt-4 text-2xl font-semibold text-neutral-600 tracking-widest font-['Maven Pro'] leading-loose">
          <span class="">Industrial Cleaning</span>
        </h4>
        <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Our experienced team employs maintains the highest standards of cleanliness and safety in your industrial facilitie to tackle. Discover efficient solutions for industrial cleaning with us.</p>
      </div>
    </div>
  </div>
</a>


<a href="">
  <div class="flex w-full">
    <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out  transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
      <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={endOfLease} alt="blog"/>
      <div class="px-6 py-8">
        <h4 class="mt-4 text-2xl font-semibold text-neutral-600 tracking-widest font-['Maven Pro'] leading-loose">
          <span class="">End of Lease Cleaning</span>
        </h4>
        <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Our thorough and meticulous approach guarantees that the property is left spotless, meeting lease agreement requirements.Leave your property in pristine condition with our end of lease cleaning expertise.</p>
      </div>
    </div>
  </div>
</a>

</div>
</section>
    )
}

export default ServiceDefinition;