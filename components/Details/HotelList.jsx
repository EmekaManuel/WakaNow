import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/constants";
import { bestHotels } from "../../data";
import ReUsableTile from "../Reusable/ReUsableTile";
import { useNavigation } from "@react-navigation/native";
import ReUsableTileHotel from "../Reusable/ReUsableTileHotel";

const HotelList = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          color={COLORS.lightWhite}
          color1={COLORS.lightWhite}
          top={10}
          left={0}
          right={0}
          title={"Browse Hotels"}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>
      <View>
        <FlatList
          data={bestHotels}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReUsableTileHotel
                item={item}
                onPress={() => navigation.navigate("HotelDetails", { item })}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotelList;

const styles = StyleSheet.create({});
