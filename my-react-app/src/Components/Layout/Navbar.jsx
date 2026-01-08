import React from "react";
import { IoIosHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsFillCollectionFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { GiBigDiamondRing } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import showcase from "../../assets/images/show-case-img1.jpg";

const Navbar = () => {
  return (
    <>
      <div className="outer bg-[#5A7863] min-h-screen text-white">
        {/* NAVBAR */}
        <div className="top-section flex flex-col md:flex-row justify-between items-center px-6 py-4">
          {/* LOGO */}
          <div className="title flex items-center gap-2">
            <GiBigDiamondRing size={32} />
            <h1 className="text-xl font-semibold">Radhika Jeweller's</h1>
          </div>

          {/* NAV LINKS */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-center">
              {[
                { icon: <IoIosHome />, label: "Home", path: "/" },
                {
                  icon: <MdDashboard />,
                  label: "Dashboard",
                  path: "/dashboard",
                },
                {
                  icon: <BsFillCollectionFill />,
                  label: "Collections",
                  path: "/collections",
                },
                { icon: <IoMdContact />, label: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-2 cursor-pointer
                             hover:underline hover:underline-offset-4
                             transition-all duration-300 hover:text-[#EBF4DD]"
                >
                  <span className="text-lg">{item.icon}</span>
                  <NavLink to={item.path} className="text-lg">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* HERO / SHOWCASE */}
        <div className="show-case flex flex-col md:flex-row items-center justify-between gap-10 mt-10 px-6">
          {/* TEXT */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-bold font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              ✨ Where Elegance Meets Timeless Beauty ✨
            </h1>
            <p className="text-[#EBF4DD] text-lg mt-4">
              Crafted with love, designed to shine — discover jewellery that
              tells your story.
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={showcase}
              alt="Jewellery showcase"
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
                         rounded-tl-2xl rounded-br-2xl
                         shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                         hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                         transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
