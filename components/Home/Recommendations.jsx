import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusableStyle from "../Reusable/ReUsableStyle.style";
import ReUsableText from "../Reusable/ReUsableText";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES, TEXT } from "../../constants/constants";
import { recommendations } from "../../data";
import ReUsableTile from "../Reusable/ReUsableTile";
const Recommendations = () => {
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
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
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
          <ReUsableTile
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", { item })}
          />
        )}
      />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
