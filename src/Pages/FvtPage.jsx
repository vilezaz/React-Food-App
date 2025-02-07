import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { removeFromFavourites } from "../Store/Slices/Favourites";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Store/Slices/Cart";

const FavoritesPage = () => {
  const { favourites } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromFavourites = (recipe) => {
    dispatch(removeFromFavourites(recipe));
    toast.error("Recipe removed from favourites!");
  };

  const handleAddToCart = (recipe) => {
    dispatch(addToCart(recipe));
    toast.success("Recipe added to cart!");
  };

  if (favourites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-[80vh] pb-16 pt-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No favorites found</h2>
        <p className="text-gray-500">
          Start adding some delicious foods to your favorites!
        </p>
        <button
          onClick={() => navigate("/foods")}
          className="border-2 flex items-center gap-2 mx-auto m-3 border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50 font-semibold py-2 px-4 rounded transition-colors cursor-pointer"
        >
          Add Favorites <FaArrowLeftLong />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-32 sm:px-6 lg:px-8 py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-[#ed3f36] text-center mb-12">
        My Favorite Dishes
      </h3>

      <div className="grid grid-cols-2 md:px-14 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {favourites.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-40 sm:h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <h4 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-1">
                {recipe.strMeal}
              </h4>
              <p className="text-sm sm:text-lg md:text-2xl font-bold text-[#ed3f36]">
                ${recipe.price}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
                <button
                  onClick={() => handleAddToCart(recipe)}
                  className="flex items-center cursor-pointer justify-center gap-2 text-white py-2 sm:py-2 md:py-2 px-3 sm:px-4 md:px-5 rounded-lg transition-all duration-200 font-semibold flex-1 bg-[#ed3f36] hover:bg-[#d6372f] text-xs sm:text-sm md:text-base"
                >
                  <FaShoppingCart className="text-xs sm:text-lg md:text-xl" /> Add
                </button>
                <button
                  onClick={() => handleRemoveFromFavourites(recipe)}
                  className="flex items-center cursor-pointer justify-center gap-2 text-white py-2 sm:py-2 md:py-2 px-3 sm:px-4 md:px-5 rounded-lg transition-all duration-200 font-semibold flex-1 bg-green-500 hover:bg-green-600 text-xs sm:text-sm md:text-base"
                >
                  <FaHeart className="text-xs sm:text-lg md:text-xl" /> Loved
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;