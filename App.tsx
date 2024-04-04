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
import { COLORS } from "./utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/favorite/provider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.DARK_BROWN },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: COLORS.LIGHT_BROWN },
        drawerContentStyle: { backgroundColor: COLORS.DARK_BROWN },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: COLORS.LIGHTER_BROWN,
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        component={FavorateScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: COLORS.DARK_BROWN },
              headerTintColor: "white",
              contentStyle: { backgroundColor: COLORS.DARK_BROWN },
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
      </FavoritesContextProvider>
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
