import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reusableStyle from "./ReUsableStyle.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReUsableText from "./ReUsableText";
import { COLORS, TEXT } from "../../constants/constants";

const Rating = ({ rating }) => {
  return (
    <View style={reusableStyle.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color={"#FD9942"} />
      <WidthSpacer width={5} />
      <ReUsableText
        text={rating}
        family={"medium"}
        size={15}
        color={"#FD9942"}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
