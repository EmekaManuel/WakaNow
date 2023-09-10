import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HeightSpacer,
  Places,
  ReUsableText,
  Recommendations,
  reusableStyle,
} from "../components";
import { COLORS, SIZES, TEXT } from "../constants/constants";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusableStyle.container}>
      <View>
        <View style={reusableStyle.rowWithSpace("space-between")}>
          <ReUsableText
            text={"Hey Manuel"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.searchBox}
          >
            <AntDesign name="search1" size={20} />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge} />

        <ReUsableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <Places />

        <HeightSpacer height={SIZES.large} />

        <Recommendations />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: COLORS.white,
    height: 40,
    width: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
