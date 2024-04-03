import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";
import { IMealItemProps } from "../../interfaces";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../contants/screenName";
import MealDetails from "../MealDetails";

const MealItem: React.FC<IMealItemProps> = ({
  id,
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    console.log("clicked===>");
    navigation.navigate(SCREENS.MEAL_DETAIL, {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerMenuItem}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
