import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Colors";

export const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: COLORS.LIGHTEST_BROWN,
  },
  itemText: {
    color: COLORS.DARK_BROWN,
    textAlign: "center",
  },
});
