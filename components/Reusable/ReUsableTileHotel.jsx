import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusableStyle from "./ReUsableStyle.style";
import { COLORS, SIZES, TEXT } from "../../constants/constants";
import NetworkImage from "./NetworkImage";
import HeightSpacer from "./HeightSpacer";
import ReUsableText from "./ReUsableText";
import WidthSpacer from "./WidthSpacer";
import Rating from "./Rating";
const ReUsableTileHotel = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={reusableStyle.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.ImageUrl}
          width={80}
          height={80}
          borderRadius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <ReUsableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />

          <HeightSpacer height={8} />

          <ReUsableText
            text={item.location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

          <View style={reusableStyle.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />
            <WidthSpacer width={5} />

            <ReUsableText
              text={`(${item.reviews})`}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReUsableTileHotel;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
