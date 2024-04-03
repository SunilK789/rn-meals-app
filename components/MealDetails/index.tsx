import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';

const MealDetail = ({duration, complexity, affordability, style, textStyle}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetail