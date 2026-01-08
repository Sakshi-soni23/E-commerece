import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3B4953] text-[#F8EDE3] pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Radhika Jewellery</h2>
          <p className="text-sm leading-6 text-[#e6d6c3]">
            Crafting timeless jewellery with elegance and purity. Discover
            handcrafted gold, diamond, and silver jewellery designed to
            celebrate your special moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FFD6A5] cursor-pointer">Home</li>
            <li className="hover:text-[#FFD6A5] cursor-pointer">Dashboard</li>
            <li className="hover:text-[#FFD6A5] cursor-pointer">Collections</li>
           
            <li className="hover:text-[#FFD6A5] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />
              radhikajewellery@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt />
             Rau, Indore, Madhya Pradesh
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-medium mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <div className="p-3 rounded-full bg-[#4a5b66] hover:bg-[#FFD6A5] hover:text-black transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-3 rounded-full bg-[#4a5b66] hover:bg-[#FFD6A5] hover:text-black transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-3 rounded-full bg-[#4a5b66] hover:bg-[#FFD6A5] hover:text-black transition cursor-pointer">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#5c6b75] py-4 text-center text-sm text-[#e6d6c3]">
        © {new Date().getFullYear()} Radhika Jewellery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
