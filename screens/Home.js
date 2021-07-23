import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Home() {
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
