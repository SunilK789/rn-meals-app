import { View, Text } from "react-native";
import React, { useContext } from "react";
import MealsList from "../../components/MealsList";
import { FavoritesContext } from "../../store/context/favorite/favorite-context";
import { MEALS } from "../../data/dummy-data";
import { styles } from "./style";
import { useSelector } from "react-redux";

const FavorateScreen = () => {
  //const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteItems = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteItems.length === 0) {
    return (
      <View style={styles.rootContent}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteItems} />;
};

export default FavorateScreen;
