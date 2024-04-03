import { View, Text, Image, ScrollView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../../data/dummy-data";
import { styles } from "./style";
import MealDetails from "../../components/MealDetails";
import SubTitle from "../../components/MealDetail/Subtitle";
import ItemsList from "../../components/MealDetail/List";
import IconButton from "../../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const headerButtonPressHandler = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
