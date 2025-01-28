import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "../Store/Slices/RecipesOnHome";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Recipes = () => {
  const dispatch = useDispatch();
  const { loading, recipes, error } = useSelector((state) => state.homeRecipes);

  useEffect(() => {
    dispatch(loadRecipes());
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-2xl text-[#ed3f36] animate-pulse">
        Loading delicious recipes...
      </div>
    );
  }

  const recipesWithPrices = recipes.map((recipe) => ({
    ...recipe,
    price: Math.floor(Math.random() * 20) + 10,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-4xl font-bold text-[#ed3f36] text-center mb-16">
        Trending Dishes
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipesWithPrices.map((recipe) => (
          <div 
            key={recipe.idMeal}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
                  {recipe.strMeal}
                </h4>
                <p className="text-3xl font-bold text-[#ed3f36]">${recipe.price}</p>
              </div>

              <div className="flex gap-3">
                <button
                  className="flex items-center justify-center gap-2 bg-[#ed3f36] text-white py-2 px-4 cursor-pointer rounded-xl 
                            hover:bg-[#d6372f] transition-all duration-200 font-semibold flex-1"
                >
                  <FaShoppingCart className="text-lg" />
                  Add
                </button>
                
                <button
                  className="flex items-center justify-center gap-2 border-2 border-[#ed3f36] text-[#ed3f36] 
                            py-2 px-4 cursor-pointer rounded-xl hover:bg-[#ed3f36] hover:text-white transition-all 
                            duration-200 font-semibold flex-1"
                >
                  <FaHeart className="text-lg" />
                  Favorite
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