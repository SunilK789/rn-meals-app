import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 8,
    color: "white",
  },
  mealDetails: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
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
    marginHorizontal: 24,
    marginVertical: 10,
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
