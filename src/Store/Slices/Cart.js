import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const isPresent = state.cart.some((recipe) => recipe.idMeal === action.payload.idMeal);
        if (isPresent) {
          state.cart = state.cart.map((recipe) => recipe.idMeal === action.payload.idMeal? {...recipe, quantity: recipe.quantity + 1} : recipe);
        } else {
            state.cart = [...state.cart, { ...action.payload, quantity: 1}];
        }
      },
    removeFromcart: (state, action) => {
      state.cart = state.cart.filter(
        (recipe) => recipe.idMeal !== action.payload.idMeal
      );
    },
    decreaseQuantity: (state, action) => {
      const recipe = state.cart.find(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (recipe && recipe.quantity > 1) {
        recipe.quantity -= 1;
      }
    }
  },
});

export const { addToCart, removeFromcart, decreaseQuantity } =
  cartReducer.actions;

export default cartReducer.reducer;
