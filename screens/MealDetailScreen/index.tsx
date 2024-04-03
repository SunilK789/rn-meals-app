import { View, Text, Image } from "react-native";
import React from "react";
import { MEALS } from "../../data/dummy-data";
import { styles } from "./style";
import MealDetails from "../../components/MealDetails";
import SubTitle from "../../components/MealDetail/Subtitle";
import List from "../../components/MealDetail/List";
import ItemsList from "../../components/MealDetail/List";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log("selectedMeal===>", selectedMeal.ingredients);
  return (
    <View>
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
    </View>
  );
};

export default MealDetailScreen;
