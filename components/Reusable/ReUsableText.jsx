import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReUsableText = ({ text, family, size, color, textAlign }) => {
  return (
    <View>
      <Text style={styles.textStyle(family, size, color, textAlign)}>
        {text}
      </Text>
    </View>
  );
};

export default ReUsableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color, textAlign) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: textAlign,
  }),
});
