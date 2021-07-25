import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("rating")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("body")}
        </Text>
      </View>
    </SafeAreaView>
  );
}
