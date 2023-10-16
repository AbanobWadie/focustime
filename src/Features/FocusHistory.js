import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../utils/Colors";

export default function FocusHistory({ history }) {
  if (!history || !history.length)
    return <Text style={styles.item}>No focused on anything yet !</Text>;

  const renderItem = ({ item, index }) => (
    <Text style={styles.item}>
      {index + 1}- {item}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 10,
  },
  item: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 25,
  },
});
