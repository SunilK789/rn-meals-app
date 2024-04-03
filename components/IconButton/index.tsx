import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
      <Ionicons name={icon} color={color} size={24} />
    </Pressable>
  );
};

export default IconButton;
