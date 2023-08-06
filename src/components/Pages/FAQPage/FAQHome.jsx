import React from "react";
import FAQimage from "../../../assets/faq.png"
import { useEffect } from "react";


const FAQHome = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        
      }, [])

    return (
        
    <div class="bg-white dark:bg-gray-700">
        <div class="border-b dark:border-gray-700">
            <div class="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
                <div class="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
                    <div class="col-span-1">
                    <div class="flex flex-col items-center justify-center w-full h-full mt-10 relative lg:pr-10 pl-32 ">
          <img src={FAQimage} class="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"   width={2432}
                                height={1442}/>
        </div>
                        {/* <div class="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0">
                            <img src={FAQimage} alt="shoes" loading="lazy"    
                              />
                        </div> */}
                    </div>
    
                    <div class="relative col-span-1">
                        <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">A Look for every <span
                                class="text-cyan-800 dark:text-cyan-400 ">Concern</span>.</h1>
                        <div class="mt-8 lg:mt-16 space-y-8">
                            <p class="text-gray-700 dark:text-gray-300 text-xl font-['Maven Pro'] tracking-widest leading-loose">Share any concerns you may have, as we have a specialized team ready to assist you with your inquiries.</p>
                            {/* <div class="flex space-x-4 mt-6">
                                <button type="button" title="Start buying"
                                    class="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max">
                                    <span class="block text-white text-sm">
                                        View Us
                                    </span>
                                </button>
                                <button type="button" title="Start buying"
                                    class="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:border-gray-700 sm:w-max">
                                    <span class="block text-gray-800 text-sm dark:text-white">
                                        View store
                                    </span>
                                </button>
                            </div> */}
                        </div>'
                    </div>
                </div>
            </div>
        </div>
    </div>
                                        
    )
}

export default FAQHome;