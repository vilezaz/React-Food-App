import { configureStore } from "@reduxjs/toolkit";
import homeRecipesReducer from "../Store/Slices/RecipesOnHome";

export const store = configureStore({
  reducer: {
    homeRecipes: homeRecipesReducer,
  },
});
