import React from "react";
import AboutHome from "../Pages/AboutPage/AboutHome";
import MiniAbout from "../Pages/AboutPage/MiniAbout";
import AboutDefinition from "../Pages/AboutPage/AboutDefinition";
import AboutService from "../Pages/AboutPage/AboutService";
import Testimonial from "../Pages/AboutPage/Testimonial";

const AboutPage = () => {
    return (
        <>
            <AboutHome/>
            <MiniAbout/>
            {/* <AboutService/> */}
            <AboutDefinition/>
            <Testimonial/>
        </>
    )
}

export default AboutPage;