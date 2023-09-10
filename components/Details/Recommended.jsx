import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/constants";
import { recommendations } from "../../data";
import ReUsableTile from "../Reusable/ReUsableTile";
import { useNavigation } from "@react-navigation/native";

const Recommended = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          color={COLORS.lightWhite}
          color1={COLORS.lightWhite}
          title={"Recommendations"}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("Search")}
        />
      </View>
      <View>
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReUsableTile
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recommended;

const styles = StyleSheet.create({});
