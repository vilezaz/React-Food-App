import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  loadCategoriesFoods,
} from "../Store/Slices/Categories";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Categories = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(null);
  const {
    categories,
    currentCategoryFoods,
    foodsLoading,
    categoriesLoading,
    error,
  } = useSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleRecipes, setVisibleRecipes] = useState(9);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const loadMoreRecipes = () => {
    setVisibleRecipes((prev) => prev + 9);
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    if (!categoriesLoading && categories.length > 0 && !currentCategory) {
      setCurrentCategory(categories[0].strCategory);
    }
  }, [categories, categoriesLoading]);  

  useEffect(() => {
    if (currentCategory) {
      dispatch(loadCategoriesFoods(currentCategory));
    }
  }, [currentCategory]);

  useEffect(() => {
    setVisibleRecipes(9);
  }, [currentCategory]);

  return (
    categoriesLoading ? (
      <div className="text-center h-[60vh] pb-16 pt-28 text-2xl text-[#ed3f36] animate-pulse">
        Loading...
      </div>
    ) : (
      <div className="px-28">
      <div>
        <div className="pt-32 flex flex-wrap justify-center gap-4 px-28">
          {currentCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setCurrentCategory(category.strCategory)}
              className={`px-4 rounded min-w-24 py-2 ${
                currentCategory === category.strCategory
                  ? "bg-[#ed3f36] text-white"
                  : "border-2 border-[#ed3f36] text-[#ed3f36] hover:bg-orange-50"
              }`}
            >
              {category.strCategory}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2 my-8">
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
      </div>

      <div className="px-4 py-8">
        {foodsLoading ? (
          <div className="text-center pb-16 pt-10 h-[40vh] text-2xl text-[#ed3f36] animate-pulse">
            Loading meals...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategoryFoods.slice(0, visibleRecipes).map((recipe) => (
              <div
                key={recipe.idMeal}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
    )
  );
};

export default Categories;
