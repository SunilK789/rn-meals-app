import { View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealsList/MealItem";
import { IMealItemProps } from "../../interfaces";
import MealsList from "../../components/MealsList";

const CategoryOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categotyTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categotyTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default CategoryOverview;
