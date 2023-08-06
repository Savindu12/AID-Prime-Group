import React from "react";
import contactHome from "../../../assets/sad.png"
import { useEffect } from "react";
import HomeBG from "../../../assets/image10.jpg"

const ContactPageHome = () => {

    const backgroundImageStyle = {
        backgroundImage: `url("${HomeBG}")`,
        backgroundSize: "cover",
        opacity: 0.8,
      };

    useEffect(() => {
        window.scrollTo(0, 0)
        
      }, [])

    return (
        <div className="relative bg-opacity-40 " style={backgroundImageStyle}>
        <div className="bg-blue-700 bg-opacity-40 px-30 backdrop-blur-sm">
        <section>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-36">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-indigo-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-blue-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center w-[48rem] max-w-none sm:w-[34rem] md:-ml-4 lg:-ml-0" alt="hero" src={contactHome}/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <h1 class="mb-8 text-4xlfont-bold leading-none tracking-widest text-white font-['Maven Pro'] md:text-7xl lg:text-5xl">Let's embark on a Journey of Transformation and Immaculateness Together.</h1>
        <p class="mb-8 text-xl leading-relaxed tracking-widest text-left font-['Maven Pro'] text-gray-200">Where every inquiry becomes an opportunity to weave cleanliness into the fabric of your spaces.</p>
        {/* <div class="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
          <form action="" method="post" id="revue-form" name="revue-form" target="_blank" class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex">
            <div class="flex-1 min-w-0 revue-form-group">
              <label for="member_email" class="sr-only">Email address</label>
              <input id="cta-email" type="email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email  "/>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
              <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Notify me</button>
            </div>
          </form>
         
        </div> */}
        
      </div>
    </div>
  </div>
</section>
        </div>
       </div>
                                        
    )
}

<div class=" md:-right-32 md:block md:w-full md:ml-auto lg:absolute lg:-right-32 lg:w-[60%]">
                            
                            <img src={contactHome}   
                            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
                             width={2432}
                                height={1442}
                                alt="gril on an horse" loading="lazy"/>
                        </div>
export default ContactPageHome;