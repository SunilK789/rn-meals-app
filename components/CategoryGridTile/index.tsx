import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
