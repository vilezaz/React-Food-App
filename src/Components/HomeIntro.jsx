import React from 'react';
import deliveryImage from "../assets/images/delivery-img.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomeIntro = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex md:pt-32 flex-col-reverse md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-3/5 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ed3f36] mb-4 leading-snug">
          Delicious Food <span className='text-zinc-700'>Delivered <br className="hidden md:block" /> to</span> Your Door
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Experience the finest culinary delights from top-rated restaurants in your area. 
          Our curated selection of meals ensures you get restaurant-quality food delivered 
          fresh and hot to your doorstep. Order now and discover a world of flavors!
        </p>
        <div className="flex sm:flex-row gap-4 sm:gap-8 items-center justify-center md:justify-start">
          <button className="bg-[#ed3f36] cursor-pointer flex items-center hover:bg-zinc-700 text-white font-semibold py-2 px-6 rounded transition-colors">
            Order Now <MdOutlineKeyboardArrowRight className="text-xl ml-2" />
          </button>
          <button className="border-2 cursor-pointer border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50 font-semibold py-2 px-6 rounded transition-colors">
            View Menu
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/5 flex justify-center px-4">
        <img 
          src={deliveryImage} 
          alt="Delicious food platter"
          className="rounded w-full max-w-xs sm:max-w-sm md:max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HomeIntro;
