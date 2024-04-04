import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Colors";

export const styles = StyleSheet.create({
  subTitle: {
    color: COLORS.LIGHTEST_BROWN,
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
    padding: 6,
  },
  subTitleContainer: {
    borderBottomColor: COLORS.LIGHTEST_BROWN,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 10,
  },
});
