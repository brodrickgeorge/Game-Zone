import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Home({ navigation }) {
  const handlePress = () => {
    navigation.navigate("ReviewDetails");
  };

  return (
    <SafeAreaView style={globalStyles.containerSA}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        <Button title="go to review details." onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}
