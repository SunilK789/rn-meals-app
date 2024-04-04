import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/Category";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryOverview from "./screens/CategoryOverview";
import { SCREENS } from "./contants/screenName";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavorateScreen from "./screens/Favorite";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen name="Category" component={CategoriesScreen} options={{
        title:'All Categories'
      }}/>
      <Drawer.Screen name="FavoriteScreen" component={FavorateScreen} options={{
        title: "Favorites"
      }} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name={SCREENS.CATEGORIES_SCREEN}
            component={DrawerNavigation}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SCREENS.CATEGORY_OVERVIEW}
            component={CategoryOverview}
          />
          <Stack.Screen
            name={SCREENS.MEAL_DETAIL}
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
