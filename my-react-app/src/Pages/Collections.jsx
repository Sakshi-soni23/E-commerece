import React from "react";
import collectiondata from "../Data/Collections.js"
import { GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Collections = () => {
  const navigate = useNavigate(-1);
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(collectiondata.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  const currentItems = collectiondata.slice(startIndex, endIndex);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2EA] via-[#D3E6DA] to-[#C1DACB]">
      {/* Page Title */}

      <div className="bg-[#A1BC98] py-6  relative shadow-md">
        <GrFormPreviousLink
          size={40}
          className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer text-[#1E3B3A] hover:scale-110 transition"
          onClick={() => navigate("/")}
        />

        <h1 className="font-serif text-4xl text-center text-[#1E3B3A] animate-pulse">
          Modern Elegance Collection
        </h1>
        <p className="text-center text-[#355F5B] mt-2">
          Discover jewellery crafted for timeless beauty
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Card */}
          {currentItems.map((items) => (
            <div
              className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
              key={items.id}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={items.img}
                  alt="Elegant Earrings"
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg text-[#1E3B3A]">
                    {items.title}
                  </h2>
                  <span className="text-sm bg-[#5FA7A0]/20 text-[#1E3B3A] px-2 py-1 rounded-full">
                    ★ {items.Rating}
                  </span>
                </div>

                <p className="text-sm text-[#355F5B] mt-2">
                  {items.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-[#1E3B3A]">
                    {items.price}
                  </span>
                  <button className="bg-[#1E3B3A] text-white px-4 py-2 rounded-full hover:bg-[#5FA7A0] transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Card End */}
        </div>
        <div className="flex justify-center items-center gap-3 mt-10">
          {/* Previous */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 rounded-lg bg-[#1E3B3A] text-white disabled:opacity-40"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#5FA7A0] text-white"
                  : "bg-white text-[#1E3B3A]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 rounded-lg bg-[#1E3B3A] text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
