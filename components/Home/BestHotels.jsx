import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ReUsableText from "../Reusable/ReUsableText";
import reusableStyle from "../Reusable/ReUsableStyle.style";
import ReUsableTile from "../Reusable/ReUsableTile";
import { COLORS, TEXT, SIZES } from "../../constants/constants";
import React from "react";
import { recommendations } from "../../data";
import { useNavigation } from "@react-navigation/native";
import HotelCard from "../Reusable/HotelCard";

const BestHotels = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={[
          reusableStyle.rowWithSpace("space-between"),
          { paddingBottom: 20 },
        ]}
      >
        <ReUsableText
          text={"Best Resorts"}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("BestResort")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => (
          <HotelCard
            item={item}
            onPress={() => navigation.navigate("HotelDetails")}
          />
        )}
      />
    </View>
  );
};

export default BestHotels;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
