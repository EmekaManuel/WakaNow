import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, SIZES, TEXT } from "../../constants/constants";
import { ReUsableText } from "../index";
const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.slideImage} />
      <View style={styles.stack}>
        <ReUsableText
          text={item.title}
          family={"medium"}
          size={TEXT.xxLarge}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slideImage: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
});
