import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

export const RoundedButton = ({ size = 100, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles(size).shape, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    shape: {
      borderRadius: size / 2,
      width: size,
      height: size,
      borderWidth: 1,
      borderColor: Colors.white,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: size / 3,
      color: Colors.white,
    },
  });
