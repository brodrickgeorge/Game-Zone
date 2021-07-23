import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.container}>
        <Text>About</Text>
      </View>
    </SafeAreaView>
  );
}
