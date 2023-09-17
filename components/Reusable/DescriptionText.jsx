import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TEXT } from "../../constants/constants";

const DescriptionText = ({ lines, text }) => {
  return (
    <Text style={styles.description} numberOfLines={lines}>
      {text}
    </Text>
  );
};

export default DescriptionText;

const styles = StyleSheet.create({
  description: {
    paddingVertical: 10,
    fontFamily: "regular",
    textAlign: "justify",
    fontSize: TEXT.medium,
  },
});
