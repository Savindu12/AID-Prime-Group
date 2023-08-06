import React from "react";
import Home from "../Pages/HomePage/HomePage";
import About from "../Pages/HomePage/about";
import AboutService from "../Pages/HomePage/aboutservice";
import Partners from "../Pages/HomePage/partnets";

const HomePage = () => {
    return (
        <>
        <Home/>
        <About/>
        <Partners/>
        {/* <AboutService/> */}
        </>
    )
}

export default HomePage;