import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { removeFromFavourites } from "../Store/Slices/Favourites";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const { favourites } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromFavourites = (recipe) => {
    dispatch(removeFromFavourites(recipe));
    toast.error("Recipe removed from favourites!");
  }

  if (favourites.length === 0) {
    return (
      <div className="text-center flex justify-center items-center flex-col gap-3 h-[80vh] pb-16 pt-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No favorites found</h2>
        <p className="text-gray-500">Start adding some delicious recipes to your favorites!</p>
        <button onClick={() => navigate("/foods")} className="border-2 flex items-center gap-2 mx-auto m-3 border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50 font-semibold py-2 px-4 rounded transition-colors cursor-pointer">Add Favourites <span><FaArrowLeftLong /></span></button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:px-24 py-16">
      <h3 className="text-4xl font-bold text-[#ed3f36] text-center mb-14">
        My Favorite Dishes
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favourites.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 text-[#ed3f36] px-3 py-1 rounded-full text-sm font-medium">
                {recipe.strCategory || "Main Course"}
              </span>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
                  {recipe.strMeal}
                </h4>
                <p className="text-2xl font-bold text-[#ed3f36]">
                  ${recipe.price}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  className="flex items-center justify-center gap-2 text-white py-2 px-4 cursor-pointer rounded-xl transition-all duration-200 font-semibold flex-1 bg-[#ed3f36] hover:bg-[#d6372f]">
                  <FaShoppingCart className="text-lg" />
                  Add
                </button>

                <button onClick={() => handleRemoveFromFavourites(recipe)}
                  className="flex items-center justify-center gap-2 text-white py-2 px-4 cursor-pointer rounded-xl transition-all duration-200 font-semibold flex-1 bg-green-500 hover:bg-green-600">
                  <FaHeart className="text-lg" />
                  Loved
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