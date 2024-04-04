import React, { createContext, ReactNode, useState } from "react";
import { FavoritesContextType } from "../../../interfaces";

const defaultValues: FavoritesContextType = {
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
};

const FavoritesContext = createContext<FavoritesContextType>(defaultValues);

export { FavoritesContext };
