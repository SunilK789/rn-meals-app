import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
  favoriteMeals: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
