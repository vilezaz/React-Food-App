import { configureStore } from "@reduxjs/toolkit";
import homeRecipesReducer from "../Store/Slices/RecipesOnHome";
import categoriesReducer from "../Store/Slices/Categories";

export const store = configureStore({
  reducer: {
    homeRecipes: homeRecipesReducer,
    categories: categoriesReducer,
  },
});
