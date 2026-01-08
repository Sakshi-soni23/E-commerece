import React from "react";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Contact = () => {
   const navigate = useNavigate(-1);
  return (
    <>
      <div className="min-h-screen bg-[#E3F4F4]">
        {/* Header Section */}
        <section className="bg-[#1B4242] h-[55vh] flex flex-col justify-center">
          <IoMdArrowRoundBack
            size={30}
            className="ml-8 mt-[-2em] hover:cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1 className="text-5xl md:text-7xl font-serif text-white text-center">
            Contact With Us
          </h1>
          <p className="text-center text-gray-200 max-w-xl mx-auto mt-4 px-4">
            Every piece of jewellery tells a story. Let us help you find or
            create yours. Get in touch with us today.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Address */}
            <div className="border rounded-xl bg-[#5C8374] text-black p-6 text-center hover:shadow-xl transition">
              <IoHome size={40} className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Shop</h2>
              <p className="text-sm">
                Radhika Jewellers <br />
                Rau, Indore <br />
                Madhya Pradesh, India
              </p>
            </div>

            {/* Phone */}
            <div className="border rounded-xl bg-[#5C8374] text-black p-6 text-center hover:shadow-xl transition">
              <FaPhoneAlt size={40} className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Call Us</h2>
              <p className="text-sm">+91 98765 43210</p>
              <span className="text-xs text-gray-700">
                Mon – Sat | 10 AM – 8 PM
              </span>
            </div>

            {/* Email */}
            <div className="border rounded-xl bg-[#5C8374] text-black p-6 text-center hover:shadow-xl transition">
              <MdEmail size={40} className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email Us</h2>
              <p className="text-sm">radhikajewellers@gmail.com</p>
              <span className="text-xs text-gray-700">
                We reply within 24 hours
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
