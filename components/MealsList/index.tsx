import { View, Text, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { IMealItemProps } from "../../interfaces";

const MealsList = ({items}) => {

  const renderedMealItem = (itemData: any) => {
    const item = itemData.item;

    const mealItemProps: IMealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderedMealItem}
      />
    </View>
  );
};

export default MealsList;
