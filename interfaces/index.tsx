import { ReactNode } from "react";

export interface IMealItemProps {
  id: string,
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: string;
}

export interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export interface FavoritesContextProviderProps {
  children: ReactNode;
}


