import { View, Text } from "react-native";
import React, { useContext } from "react";
import MealsList from "../../components/MealsList";
import { FavoritesContext } from "../../store/context/favorite/favorite-context";
import { MEALS } from "../../data/dummy-data";

const FavorateScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteItems = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  return <MealsList items={favoriteItems} />;
};

export default FavorateScreen;
