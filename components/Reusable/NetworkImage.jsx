import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, borderRadius }) => {
  return (
    <Image
      source={{ uri: source }}
      style={styles.imageStyle(width, height, borderRadius)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  imageStyle: (width, height, borderRadius) => ({
    width: width,
    height: height,
    borderRadius: borderRadius,
    resizeMode: "cover",
  }),
});
