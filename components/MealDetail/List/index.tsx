import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

const ItemsList: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <>
      {data.map((item: string) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default ItemsList;
