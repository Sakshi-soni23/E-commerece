import React from "react";
import img5 from "../../assets/images/img-2.jpg"
import img2 from "../../assets/images/img-3.jpg";
import img3 from "../../assets/images/im-4.jpg";
import img4 from "../../assets/images/jewllery.jpg";
import { GiDiamondRing } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { GiHeartEarrings } from "react-icons/gi";

const Nextsec = () => {
  const images = [
    { id: 1, img: img2 },
    { id: 2, img: img3 },
    { id: 3, img: img4 },
    { id: 4, img: img5 },
  ];

  return (
    <>
      <div className=" bg-[#EBF4DD] min-h-screen text-black">
        <h2 className=" text-4xl font-serif py-36 text-center animate-bounce ">
          Some Elegents Collections
        </h2>
        <div className="cards grid grid-cols-2 md:grid-cols-4 gap-6 px-10 ml-6 mt-[-6em] place-items-center">
          {images.map((item) => (
            <div
              key={item.id}
              className="w-[220px] h-[260px] overflow-hidden shadow-lg rounded-lg"
            >
              <img
                src={item.img}
                alt="jewellery"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="icons flex gap-15  text-center ml-[44%] mt-[10vw] items-center">
          <div>
            <GiDiamondRing size={35} className="ml-3.5" />
            <h1 className="text-[0.9vw] font-serif font-bold">Diamonds</h1>
          </div>
          <div>
            <IoDiamondOutline size={35}  className="ml-3" />
            <h1  className="text-[0.9vw] font-serif font-bold">Rings</h1>
          </div>
          <div>
            <GiHeartEarrings size={35} className="ml-3.5"  />
            <h1  className="text-[0.9vw] font-serif font-bold">Earings</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nextsec;
