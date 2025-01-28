import React from 'react';
import deliveryImage from "../assets/images/delivery-img.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomeIntro = () => {
  return (
    <div className="mx-auto pb-12 pt-32 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-3/5">
        <h2 className="text-5xl font-bold text-[#ed3f36] mb-4 leading-snug">
          Delicious Food <span className='text-zinc-700'>Delivered <br /> to</span> Your Door
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Experience the finest culinary delights from top-rated restaurants in your area. 
          Our curated selection of meals ensures you get restaurant-quality food delivered 
          fresh and hot to your doorstep. Order now and discover a world of flavors!
        </p>
        <div className="flex gap-8">
          <button className="bg-[#ed3f36] flex items-center hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded transition-colors cursor-pointer">
            Order Now <span className='text-xl space-x-2'><MdOutlineKeyboardArrowRight /></span>
          </button>
          <button className="border-2 border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50 font-semibold py-2 px-4 rounded transition-colors cursor-pointer">
            View Menu
          </button>
        </div>
      </div>
      <div className="w-2/5 px-8">
        <img 
          src={deliveryImage} 
          alt="Delicious food platter"
          className="rounded w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HomeIntro;