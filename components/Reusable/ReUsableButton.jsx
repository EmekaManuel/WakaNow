import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/constants";

const ReUsableButton = ({ onPress, buttonText }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle()} onPress={onPress}>
      <Text
        style={styles.buttonTextStyle(btnFontFamily, btnFontSize, btnTextColor)}
      >
        {buttontext}
      </Text>
    </TouchableOpacity>
  );
};

export default ReUsableButton;

const styles = StyleSheet.create({
  buttonTextStyle: (btnTextColor, btnFontFamily, btnFontSize) => ({
    fontFamily: btnFontFamily,
    fontSize: btnFontSize,
    color: btnTextColor,
  }),
  buttonStyle: (btnBorderColor, btnWidth, btnBackground, btnBorderWidth) => ({
    borderColor: btnBorderColor,
    width: btnWidth,
    backgroundColor: btnBackground,
    borderWidth: btnBorderWidth,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.small,
  }),
});
