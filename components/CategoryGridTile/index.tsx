import { View, Text, Pressable } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  console.log("title===>", title);
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
