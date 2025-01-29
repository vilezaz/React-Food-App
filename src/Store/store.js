import { configureStore } from "@reduxjs/toolkit";
import homeRecipesReducer from "../Store/Slices/RecipesOnHome";
import categoriesReducer from "../Store/Slices/Categories";
import favouritesReducer from "../Store/Slices/Favourites";

export const store = configureStore({
  reducer: {
    homeRecipes: homeRecipesReducer,
    categories: categoriesReducer,
    favourites: favouritesReducer,
  },
});
