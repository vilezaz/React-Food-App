import { configureStore } from "@reduxjs/toolkit";
import homeRecipesReducer from "../Store/Slices/RecipesOnHome";
import categoriesReducer from "../Store/Slices/Categories";
import favouritesReducer from "../Store/Slices/Favourites";
import cartReducer from "../Store/Slices/Cart";
import authReducer from "../Store/Slices/Auth";

export const store = configureStore({
  reducer: {
    homeRecipes: homeRecipesReducer,
    categories: categoriesReducer,
    favourites: favouritesReducer,
    cart: cartReducer,
    auth: authReducer
  },
});
