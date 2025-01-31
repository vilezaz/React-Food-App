import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

export const loadRecipes = createAsyncThunk(
  "homeRecipes/loadRecipes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
      );

      if (!response.data.meals) return [];

      return response.data.meals.map((meal) => ({
        ...meal,
        price: (Math.random() * 20 + 5).toFixed(2),
      }));
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const homeRecipesReducer = createSlice({
  name: "homeRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.loading = false;
      })
      .addCase(loadRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load recipes";
      });
  },
});

export default homeRecipesReducer.reducer;
