import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusableStyle from "./ReUsableStyle.style";
import { COLORS, TEXT } from "../../constants/constants";
import { AntDesign } from "@expo/vector-icons";
import ReUsableText from "./ReUsableText";

const AppBar = ({ color, color1, title, icon, onPress, onPress1 }) => {
  return (
    <View style={styles.overlay}>
      <View style={reusableStyle.rowWithSpace("space-between")}>
        <TouchableOpacity onPress={onPress} style={styles.appBarBox(color)}>
          <AntDesign name="left" size={20} />
        </TouchableOpacity>
        <ReUsableText
          text={title}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={onPress1} style={styles.appBarBox1(color1)}>
          <AntDesign name={icon} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  appBarBox: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  appBarBox1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
