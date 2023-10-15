import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-paper';

export default function FocusView() {
  const [text, setText] = useState("");
  console.log(text)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textField}
        mode="outlined"
        label="Email"
        activeOutlineColor="#000"
        onChangeText={value => setText(value)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  textField: {
    marginRight: 10,
    marginLeft: 10,
  },
});
