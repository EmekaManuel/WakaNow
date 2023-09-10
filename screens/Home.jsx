import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BestHotels,
  HeightSpacer,
  ReUsableText,
  Recommendations,
  WidthSpacer,
  reusableStyle,
} from "../components";
import { COLORS, SIZES, TEXT } from "../constants/constants";
import Places from "../components/Home/Places";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusableStyle.container}>
      <View>
        <View style={reusableStyle.rowWithSpace("space-between")}>
          <View style={styles.header}>
            <Ionicons name="person-circle-outline" size={32} color="#8B4513" />
            <WidthSpacer width={5} />

            <ReUsableText
              text={"Hi Manuel"}
              family={"regular"}
              size={TEXT.medium}
              color={COLORS.black}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.searchBox}
          >
            <AntDesign name="search1" size={20} />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={15} />

        <ReUsableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <Places />

        <HeightSpacer height={12} />

        <Recommendations />

        <HeightSpacer height={12} />

        <BestHotels />
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
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
