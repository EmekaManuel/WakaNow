import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/constants";

const ReUsableButton = ({
  onPress,
  backgroundColor,
  width,
  borderWidth,
  borderColor,
  buttonText,
  family,
  size,
  color,
}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle(
        width,
        backgroundColor,
        borderColor,
        borderWidth
      )}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle(family, size, color)}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default ReUsableButton;

const styles = StyleSheet.create({
  buttonStyle: (width, backgroundColor, borderColor, borderWidth) => ({
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
    borderColor: borderColor,
    width: width,

    borderWidth: borderWidth,
    backgroundColor: backgroundColor,
  }),
  buttonTextStyle: (family, size, color) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
  }),
});
