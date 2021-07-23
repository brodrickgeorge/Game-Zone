import React from "react";

import { globalStyles } from "../styles/Global";
import { View, Text, SafeAreaView } from "react-native";

export default function About() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.container}>
        <Text>About</Text>
      </View>
    </SafeAreaView>
  );
}
