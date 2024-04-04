import { View, Text, Image, ScrollView, Button } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../../data/dummy-data";
import { styles } from "./style";
import MealDetails from "../../components/MealDetails";
import SubTitle from "../../components/MealDetail/Subtitle";
import ItemsList from "../../components/MealDetail/List";
import IconButton from "../../components/IconButton";
import { FavoritesContext } from "../../store/context/favorite/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/favoriteSlice";

const MealDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //const favoriteMealsContext = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const headerFavoriteMealHandler = () => {
    if (mealIsFavorite) {
      //favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={headerFavoriteMealHandler}
          />
        );
      },
    });
  }, [navigation, headerFavoriteMealHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.mealDetails}>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          style={styles.detailText}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <ItemsList data={selectedMeal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <ItemsList data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
