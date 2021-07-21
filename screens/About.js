import React from "react";

import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
