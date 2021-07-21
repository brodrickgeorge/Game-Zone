import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
import About from "./screens/About";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <About />
      <ReviewDetails />
      <StatusBar style="auto" />
    </SafeAreaView>
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
