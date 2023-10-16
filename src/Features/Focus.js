import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { Colors } from "../utils/Colors";

export default function FocusView({ setListener }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={styles.textField}
          mode="flat"
          label="What would you like to ficus on?"
          activeUnderlineColor={Colors.darkBlue}
          selectionColor={Colors.darkBlue}
          cursorColor={Colors.darkBlue}
          onChangeText={setText}
        />
        <View>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => setListener(text)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textField: {
    flex: 1,
    marginRight: 10,
  },
  textFieldContainer: {
    padding: 25,
    alignItems: "center",
    flexDirection: "row",
  },
});
