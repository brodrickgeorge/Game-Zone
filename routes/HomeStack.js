import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const HomeStack = createStackNavigator();
export default function myStacks() {
  return (
    <HomeStack.Navigator initialRouteName="GameZone" headerMode="screen">
      <HomeStack.Screen name="GameZone" component={Home} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}
