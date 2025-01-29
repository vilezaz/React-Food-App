import React from "react";
import quikDelivery from "../assets/images/quik-delivery.png";
import dine from "../assets/images/dine.png";
import pickUp from "../assets/images/pick-up.png";

const AboutPage = () => {
  return (
    <div className="px-28 py-32">
      <div>
        <p className="text-center text-xl font-semibold my-4 text-[#df2027]">What we Serve</p>
        <h4 className="text-center text-4xl leading-snug font-bold text-[#212245]">Just sit back at home <br /> we will <span className="text-[#ed3f36]">take care</span></h4>
        <p className="w-1/2 mx-auto mt-4 text-gray-500 tracking-wider">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, eius
        </p>
      </div>
      <div className="flex justify-between gap-8 mt-12">
        <div className="flex flex-col gap-3 items-center">
          <img src={quikDelivery} alt="delivery" className="w-20 h-20 object-contain" />
          <b className="text-xl font-semibold">Quick Delivery</b>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            doloremque.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={dine} alt="dine" className="w-20 h-20 object-contain" />
          <b className="text-xl font-semibold">Super Dine In</b>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            doloremque.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src={pickUp} alt="pickup" className="w-20 h-20 object-contain" />
          <b className="text-xl font-semibold">Easy Pick Up</b>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            doloremque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
