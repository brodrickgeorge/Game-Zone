import React from "react";

import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function ReviewDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Review Details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
