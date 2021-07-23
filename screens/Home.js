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
