import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;
