import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Map = () => {
    
    useEffect (() => {
        Aos.init({duration:2000});
    },[]);

    return (
        <div data-aos="fade-up">
        <iframe style={{width: "100%" , height: "500px"}} src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=455%20Princes%20Hwy%2C%20Narre%20Warren%20VIC%203805%2C%20Australia+(AID%20Prime%20Group)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    )
}

export default Map;
