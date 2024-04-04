import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  ids: string[];
}

const initialState: FavoriteState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.ids.indexOf(action.payload.id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
