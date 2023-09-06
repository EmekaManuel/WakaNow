import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, SIZES, TEXT } from "../../constants/constants";
import { HeightSpacer, ReUsableButton, ReUsableText } from "../index";
import { useNavigation } from "@react-navigation/native";

const Slides = ({ item }) => {
  const navigation = useNavigation();
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
        <HeightSpacer height={20} />

        <ReUsableButton
          onPress={() => {}}
          buttonText={"Let's Go"}
          backgroundColor={COLORS.white}
          borderColor={COLORS.red}
          width={(SIZES.width - 50) / 2.2}
          borderWidth={0}
          family={"bold"}
          size={TEXT.medium}
          color={COLORS.black}
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
