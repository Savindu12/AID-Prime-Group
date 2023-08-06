import React, {useState} from "react";
import "./header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import headerLogo from "../../../assets/Logo/Horizontal.png"
import { FaBars } from 'react-icons/fa';
import {ImCross} from 'react-icons/im'
import { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames (...classes) {
    return classes.filter(Boolean).join('')
}

const Header = () => {

    const [color, setcolor] = useState (false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setcolor(true);
        } else {
            setcolor (false);
        }
    };
    
    const [Mobile, setMobile] = useState(false)

    window.addEventListener("scroll", changeColor);

    return (
        <>
        <div className={color? "header header-bg " : "header"}>

            {/* <h1 className="heading">NobleTec Innovations</h1>   */}
            <img src={headerLogo} class="h-34 w-34 mt-4" className="logo" alt="logo tailus" />

                <div className={color? "nav-bar navbar-bg " : "nav-bar"}>  
                    <ul className={Mobile ? "nav-links-mobile" : "nav-menu"} onClick={() => setMobile(false)}>
                        
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-blue-500 ">
                            <Link to="/" class="hover:text-blue-500">Home</Link>
                        </li>
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-blue-500 " >
                            <Link to="/about" class="hover:text-blue-500">About Us </Link>     
                        </li >
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-blue-500 ">
                            <Link to="/services" class="hover:text-blue-500">Services</Link>
                        </li>
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-blue-500 ">
                            <Link to="/faq" class="hover:text-blue-500">FAQs</Link>
                        </li>
                        <li class="block h-16 leading-[4rem] border-b-2 border-transparent hover:text-blue-500  ">
                            <Link to="/Contact" class="hover:text-blue-500">Contact</Link>
                        </li>
                        {/* <li>
                            <Link to="/technology">Technologies</Link>
                        </li> */}
                              
                    </ul>

                    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}> 
                        {Mobile? <ImCross/> : <FaBars/>} 
                    </button>
                </div>  
        </div>
    </>
    )
}

export default Header;