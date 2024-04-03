import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealItem";
import { IMealItemProps } from "../../interfaces";

const CategoryOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categotyTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: categotyTitle
    });
  },[catId, navigation]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const renderedMealItem = (itemData: any) => {
    const item = itemData.item;

    const mealItemProps: IMealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };
    return (
        <MealItem {...mealItemProps} />
    );
  };

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderedMealItem}
      />
    </View>
  );
};

export default CategoryOverview;
