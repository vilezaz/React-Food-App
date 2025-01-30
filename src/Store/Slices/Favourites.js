import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesReducer = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
        const isPresent = state.favourites.some((recipe) => recipe.idMeal === action.payload.idMeal);
        if (!isPresent) {
          state.favourites.push(action.payload);
        }
      },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (recipe) => recipe.idMeal !== action.payload.idMeal
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesReducer.actions;

export default favouritesReducer.reducer;
