import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
});
