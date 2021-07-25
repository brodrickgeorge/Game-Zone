import React from "react";

import { View, Text, SafeAreaView, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {
  const handlePress = () => { 
    navigation.goBack();
  };
  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Review Details Screen</Text>
        <Button title="Back to Home" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}
