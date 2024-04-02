import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../../components/CategoryGridTile";
import Category from "../../models/category";
import { SCREENS } from "../../contants/screenName";

const CategoriesScreen = ({ navigation }) => {
  //   console.log("CATEGORIES===>", CATEGORIES);

  const renderedCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const onPressHandler = () => {
      navigation.navigate(SCREENS.CATEGORY_OVERVIEW);
    };

    return (
      <>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={onPressHandler}
        />
      </>
    );
  };

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
