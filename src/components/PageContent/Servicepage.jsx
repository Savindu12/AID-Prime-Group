import React from "react";
import ServiceHome from "../Pages/ServicesPage/ServicePage";
import ServiceDefinition from "../Pages/ServicesPage/ServiceDefinition";
import Services from "../Pages/ServicesPage/Services";
import ServiceList from "../Pages/ServicesPage/ServiceLise";

const ServicePage = () => {
    return (
        <>
            <ServiceHome/>
            <ServiceDefinition/>
            <Services/>
            <ServiceList/>
        </>
    )
}

export default ServicePage;