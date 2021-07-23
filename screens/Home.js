import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Home() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
});
