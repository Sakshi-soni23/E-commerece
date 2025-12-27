import React from 'react'
import { IoIosHome } from "react-icons/io";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { BsFillCollectionFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/images/logo.jpg"
import { NavLink } from "react-router-dom";
import Contact from "../Components/Contact.jsx";
import Collections from './Collections.jsx';
import About from './About.jsx';


const Navbar = () => {
  return (
    <>
      <div className="flex justify-around font-bold font-serif bg-[#1B3C53] text-white">
        <div className="title flex">
          <img src={logo} alt="" className="w-11 h-11  mt-2 rounded-3xl" />
          <h1 className=" text-[20px] px-2 py-4">Radhika Jeweller's</h1>
        </div>
        <div className="nav-bar">
          <nav className="">
            <ul className="flex gap-8 text-center py-4">
              <li className="flex gap-3 cursor-pointer hover:underline hover:underline-offset-8 decoration-dashed decoration-[#F1F3E0]">
                <IoIosHome className="icon  text-xl" />
                <span className="text-[18px] ">Home</span>
              </li>

              <li className="flex gap-3 cursor-pointer hover:underline hover:underline-offset-8 decoration-dashed decoration-[#F1F3E0]">
                <MdOutlineRoundaboutRight className="icon text-xl" />
                <NavLink to="/about">
                  <span className="text-[18px] ">About</span>
                </NavLink>
              </li>

              <li className="flex gap-3 cursor-pointer hover:underline hover:underline-offset-8 decoration-dashed decoration-[#F1F3E0] ">
                <BsFillCollectionFill className="text-xl " />
                <NavLink to="/collections">
                  <span className="text-[18px] ">Collections</span>
                </NavLink>
              </li>

              <li className="flex gap-3 cursor-pointer hover:underline hover:underline-offset-8 decoration-dashed decoration-[#F1F3E0]">
                <IoMdContact className="text-xl" />
                <NavLink to="/contact">
                  <span className="text-[18px]">Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="toggle cursor-pointer  hover:underline hover:underline-offset-8 decoration-dashed decoration-[#F1F3E0]">
          <MdDarkMode size={28} className="mt-4" />
          <MdOutlineDarkMode size={28} className="mt-4 hidden" />
        </div>
      </div>
    </>
  );
}

export default Navbar