import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories, loadCategoriesFoods } from "../Store/Slices/Categories";
import { FaHeart, FaRedo, FaShoppingCart } from "react-icons/fa";
import { addToFavourites, removeFromFavourites } from "../Store/Slices/Favourites";
import toast from "react-hot-toast";
import { addToCart } from "../Store/Slices/Cart";
import { loadRecipes } from "../Store/Slices/RecipesOnHome";

const Categories = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleRecipes, setVisibleRecipes] = useState(9);
  const itemsPerPage = 5;

  const {
    categories,
    currentCategoryFoods,
    foodsLoading,
    categoriesLoading,
    error,
  } = useSelector((state) => state.categories);
  const favourites = useSelector((state) => state.favourites.favourites);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handleReload = () => {
    dispatch(loadRecipes());
  };

  const handleFvtBtnClick = (recipe) => {
    alreadyInFavourites(recipe)
      ? handleRemoveFromFavourites(recipe)
      : handleAddToFavourites(recipe);
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

  const alreadyInFavourites = (recipe) =>
    favourites.some((fav) => fav.idMeal === recipe.idMeal);

  const loadMoreRecipes = () => setVisibleRecipes((prev) => prev + 9);

  const handleAddToCart = (recipe) => {
    dispatch(addToCart(recipe));
    toast.success("Recipe added to cart!");
  };

  useEffect(() => {
    dispatch(loadCategories()).catch((err) =>
      console.error("Category Load Error:", err)
    );
  }, [dispatch]);

  useEffect(() => {
    if (!categoriesLoading && categories.length > 0 && !currentCategory) {
      setCurrentCategory(categories[0].strCategory);
    }
  }, [categories, categoriesLoading]);

  useEffect(() => {
    if (currentCategory) {
      dispatch(loadCategoriesFoods(currentCategory)).catch((err) =>
        console.error("Category Foods Load Error:", err)
      );
    }
  }, [currentCategory, dispatch]);

  useEffect(() => {
    setVisibleRecipes(9);
  }, [currentCategory]);

  return categoriesLoading ? (
    <div className="text-center h-[60vh] pb-16 pt-32 text-2xl text-[#ed3f36] animate-pulse">
      Loading...
    </div>
  ) : error ? (
    <div className="text-center h-[60vh] pb-16 pt-28 text-2xl text-red-600">
      <p>{error || "Something went wrong while loading categories."}</p>
      <button
        onClick={handleReload}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        <FaRedo className="inline mr-2" /> Reload
      </button>
    </div>
  ) : (
    <div className="max-w-7xl mx-auto md:pt-32 pt-20 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {currentCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCurrentCategory(category.strCategory)}
            className={`px-4 py-2 rounded min-w-[100px] ${
              currentCategory === category.strCategory
                ? "bg-[#ed3f36] text-white"
                : "border-2 border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50"
            }`}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2 my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-[#ed3f36] text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="grid px-4 grid-cols-2 md:px-14 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {foodsLoading ? (
          <div className="col-span-full text-center py-16 text-2xl text-[#ed3f36] animate-pulse">
            Loading meals...
          </div>
        ) : currentCategoryFoods.length === 0 ? (
          <div className="col-span-full text-center py-16 text-2xl text-red-600">
            No meals found.
          </div>
        ) : (
          currentCategoryFoods.slice(0, visibleRecipes).map((recipe) => (
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
                <span className="absolute top-3 left-3 bg-white/90 text-[#ed3f36] px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-medium">
                  {recipe.strCategory || currentCategory || "Main Course"}
                </span>
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
                    onClick={() => handleFvtBtnClick(recipe)}
                    className={`flex items-center cursor-pointer justify-center gap-2 border-2 py-1.5 sm:py-2 md:py-2 px-3 sm:px-4 md:px-5 rounded-lg transition-all duration-200 font-semibold flex-1 text-xs sm:text-sm md:text-base ${
                      alreadyInFavourites(recipe)
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50"
                    }`}
                  >
                    <FaHeart className="text-xs sm:text-lg md:text-xl" />{" "}
                    {alreadyInFavourites(recipe) ? "Loved" : "Love It"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {!foodsLoading && visibleRecipes < currentCategoryFoods.length && (
        <div className="text-center mt-6 mb-10">
          <button
            onClick={loadMoreRecipes}
            className="px-6 py-3 cursor-pointer bg-[#ed3f36] text-white rounded-lg hover:bg-[#d6372f] transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
