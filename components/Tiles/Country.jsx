import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TEXT, COLORS } from "../../constants/constants";
import React from "react";
import { HeightSpacer, NetworkImage, ReUsableText } from "../index";
import { useNavigation } from "@react-navigation/native";
const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", { item })}
    >
      <View>
        <NetworkImage
          source={item.ImageUrl}
          width={85}
          height={85}
          borderRadius={12}
        />
        <HeightSpacer height={3} />
        <ReUsableText
          text={item.country}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          textAlign={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
