import React, { useState } from "react";
import {
  FavoritesContextProviderProps,
  FavoritesContextType,
} from "../../../interfaces";
import { FavoritesContext } from "./favorite-context";

const FavoritesContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteIds((currentIds) => [
      ...currentIds.filter((favId) => favId !== id),
    ]);
  };
  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContextProvider };
