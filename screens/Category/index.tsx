import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../../components/CategoryGridTile";
import Category from "../../models/category";

const renderedCategoryItem = (item: ListRenderItemInfo<Category>) => {
  return (
    <>
      <CategoryGridTile title={item.item.title} color={item.item.color} />
    </>
  );
};

const CategoriesScreen = () => {
  console.log("CATEGORIES===>", CATEGORIES);
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderedCategoryItem(item)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
