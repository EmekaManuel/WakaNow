import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../constants/constants";
import NetworkImage from "./NetworkImage";
import HeightSpacer from "./HeightSpacer";
import ReUsableText from "./ReUsableText";
import Rating from "./Rating";

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card(margin)}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.ImageUrl}
            width={"90%"}
            height={"100%"}
            borderRadius={10}
          />
        </View>
        <HeightSpacer height={2} />
        <View style={{ padding: 10 }}>
          <ReUsableText
            text={item.location}
            family={"regular"}
            size={TEXT.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />
          <ReUsableText
            text={item.region}
            family={"regular"}
            size={TEXT.medium}
            color={COLORS.gray}
          />
          <HeightSpacer height={5} />
          <Rating rating={item.ratings} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 200,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginRight: margin,
  }),
  imageContainer: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
