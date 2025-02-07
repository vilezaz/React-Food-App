import React from "react";
import quikDelivery from "../assets/images/quik-delivery.png";
import dine from "../assets/images/dine.png";
import pickUp from "../assets/images/pick-up.png";

const AboutPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-16 sm:py-24 md:py-32">
      <div>
        <p className="text-center text-xl font-semibold my-4 text-[#df2027]">
          What we Serve
        </p>
        <h4 className="text-center text-3xl sm:text-4xl leading-snug font-bold text-[#212245]">
          Just sit back at home <br /> we will{" "}
          <span className="text-[#ed3f36]">take care</span>
        </h4>
        <p className="w-full sm:w-3/4 md:w-1/2 mx-auto mt-4 text-gray-500 tracking-wider">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, eius
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
        <div className="flex flex-col gap-3 items-center text-center">
          <img
            src={quikDelivery}
            alt="delivery"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <b className="text-xl font-semibold">Quick Delivery</b>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            doloremque.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center">
          <img
            src={dine}
            alt="dine"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <b className="text-xl font-semibold">Super Dine In</b>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            doloremque.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center">
          <img
            src={pickUp}
            alt="pickup"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <b className="text-xl font-semibold">Easy Pick Up</b>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            doloremque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
