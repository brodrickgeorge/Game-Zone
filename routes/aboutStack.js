import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const AboutStack = createStackNavigator();
export default function myStacks() {
  return (
    <AboutStack.Navigator initialRouteName="GameZone" headerMode="screen">
      <AboutStack.Screen
        name="About"
        component={About}
        options={{ title: "About GameZone" }}
      />
    </AboutStack.Navigator>
  );
}
