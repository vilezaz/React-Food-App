import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "../Store/Slices/RecipesOnHome";
import { FaHeart, FaShoppingCart, FaRedo } from "react-icons/fa";
import toast from "react-hot-toast";
import { addToFavourites, removeFromFavourites } from "../Store/Slices/Favourites";
import { addToCart } from "../Store/Slices/Cart";

const Recipes = () => {
  const dispatch = useDispatch();
  const { loading, recipes, error } = useSelector((state) => state.homeRecipes);
  const favourites = useSelector((state) => state.favourites.favourites);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const handleReload = () => dispatch(loadRecipes());

  const handleFvtBtnClick = (recipe) => {
    alreadyInFavourites(recipe) ? handleRemoveFromFavourites(recipe) : handleAddToFavourites(recipe);
  };

  const handleAddToFavourites = (recipe) => {
    if (!alreadyInFavourites(recipe)) {
      dispatch(addToFavourites(recipe));
      toast.success("Recipe added to favourites!");
    }
  };

  const handleRemoveFromFavourites = (recipe) => {
    if (alreadyInFavourites(recipe)) {
      dispatch(removeFromFavourites(recipe));
      toast.error("Recipe removed from favourites!");
    }
  };

  const alreadyInFavourites = (recipe) => favourites.some((fav) => fav.idMeal === recipe.idMeal);

  const handleAddToCart = (recipe) => {
    dispatch(addToCart(recipe));
    toast.success("Recipe added to cart!");
  };

  if (loading) {
    return <div className="text-center h-[50vh] py-16 text-2xl text-[#ed3f36] animate-pulse">Loading delicious recipes...</div>;
  }

  if (error) {
    return (
      <div className="text-center h-[50vh] py-16 text-2xl text-red-600">
        <p>Failed to load recipes. Please try again.</p>
        <button onClick={handleReload} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          <FaRedo className="inline mr-2" /> Reload
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-[#ed3f36] text-center mb-12">Trending Dishes</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {recipes.slice(0, 9).map((recipe) => (
          <div key={recipe.idMeal} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-40 sm:h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-3 left-3 bg-white/90 text-[#ed3f36] px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-medium">
                {recipe.strCategory || "Main Course"}
              </span>
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <h4 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-1">{recipe.strMeal}</h4>
              <p className="text-sm sm:text-lg md:text-2xl font-bold text-[#ed3f36]">${recipe.price}</p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
                <button 
                  onClick={() => handleAddToCart(recipe)} 
                  className="flex items-center cursor-pointer justify-center gap-2 text-white py-2 sm:py-2 md:py-2 px-3 sm:px-4 md:px-5 rounded-lg transition-all duration-200 font-semibold flex-1 bg-[#ed3f36] hover:bg-[#d6372f] text-xs sm:text-sm md:text-base"
                >
                  <FaShoppingCart className="text-xs sm:text-lg md:text-xl" /> Add
                </button>

                <button 
                  onClick={() => handleFvtBtnClick(recipe)} 
                  className={`flex items-center cursor-pointer justify-center gap-2 border-2 py-1.5 sm:py-2 md:py-1.5 px-3 sm:px-4 md:px-5 rounded-lg transition-all duration-200 font-semibold flex-1 text-xs sm:text-sm md:text-base ${
                    alreadyInFavourites(recipe) 
                      ? "bg-green-500 hover:bg-green-600 text-white" 
                      : "border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50"
                  }`}
                >
                  <FaHeart className="text-xs sm:text-lg md:text-xl" /> {alreadyInFavourites(recipe) ? "Loved" : "Love It"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
