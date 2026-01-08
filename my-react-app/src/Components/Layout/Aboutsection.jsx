import React from "react";
import ring from "../../assets/images/ring.jpg";

const Aboutsection = () => {
  return (
    <section className="min-h-screen bg-[#90AB8B] px-6 md:px-16 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl text-center font-bold font-serif mb-16 animate-bounce">
        Visit Our Exclusive Jewellery Stores
      </h1>

      {/* Image + Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={ring}
            alt="Gold Ring with Diamond"
            className="w-60 md:w-80 rounded-2xl transition-transform duration-700 hover:rotate-180"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Gold Ring with Diamond
          </h2>

          <p className="text-gray-700 leading-relaxed">
            This elegant gold ring is crafted in 22K pure gold and adorned with
            a finely cut diamond that adds timeless brilliance. Designed for
            everyday luxury as well as special occasions.
          </p>

          <div className="space-y-1 text-gray-800">
            <p>
              <span className="font-semibold">Material:</span> 22K Yellow Gold
            </p>
            <p>
              <span className="font-semibold">Stone:</span> Premium Cut Diamond
            </p>
            <p>
              <span className="font-semibold">Finish:</span> High Polish
            </p>
            <p>
              <span className="font-semibold">Occasion:</span> Wedding & Festive
              Wear
            </p>
          </div>
        </div>
      </div>

      {/* Brand Description */}
      <p className="text-center max-w-4xl mx-auto mt-16 text-gray-700 leading-relaxed">
        Radhika Jeweller’s brings you timeless designs crafted with purity and
        passion. Visit our offline store to experience certified gold and
        diamond jewellery, personalized assistance, and collections made for
        every special occasion.
      </p>

    </section>
  );
};

export default Aboutsection;
