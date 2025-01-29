import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  currentCategoryFoods: [],
  categoriesLoading: false,
  foodsLoading: false,
  error: null,
};

export const loadCategories = createAsyncThunk(
  "categories/loadCategories",
  async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(response);
      return response.data.categories;
    } catch (error) {
      return error;
    }
  }
);

export const loadCategoriesFoods = createAsyncThunk(
  "categories/loadCategoriesFoods", async (category) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      console.log(response);
      return response.data.meals.map((meal) => ({
        ...meal,
        price: (Math.random() * 20 + 5).toFixed(2),
      }));
    } catch (error) {
      return error;
    }
  })

const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.error = action.payload;
      })
      .addCase(loadCategoriesFoods.pending, (state) => {
        state.foodsLoading = true;
      })
      .addCase(loadCategoriesFoods.fulfilled, (state, action) => {
        state.currentCategoryFoods = action.payload;
        state.foodsLoading = false;
      })
      .addCase(loadCategoriesFoods.rejected, (state, action) => {
        state.foodsLoading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesReducer.reducer;