import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  loadCategoriesFoods,
} from "../Store/Slices/Categories";

const Categories = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(null);
  const { categories, currentCategoryFoods, loading, error } = useSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if(categories.length > 0) {
      setCurrentCategory(categories[0].strCategory);
    }
  }, [categories]);

  useEffect(() => {
    if(currentCategory) {
      dispatch(loadCategoriesFoods(currentCategory));
    }
  }, currentCategory);

  if (loading) {
    return (
      <div className="text-center h-[60vh] py-16 text-2xl text-[#ed3f36] animate-pulse">
        Loading categories...
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="pt-32 flex flex-wrap justify-center gap-4 px-28">
          {currentCategories.map((category, index) => (
            <button
              key={index}
              className="px-4 rounded min-w-24 py-2 text-white bg-[#ed3f36]"
            >
              {category.strCategory}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2 my-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage((index + 1))}
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

      <div>
        {
          currentCategoryFoods.map((food, index) => (
            <div>
              <h2 key={index}>{food.strMeal}</h2>
              <p>{food.strInstructions}</p>
              <img src={food.strMealThumb} alt={food.strMeal} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
