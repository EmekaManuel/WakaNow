import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import { countries } from "../../data";
import HeightSpacer from "../Reusable/HeightSpacer";
import { SIZES } from "../../constants/constants";
import Country from "../Tiles/Country";
const Places = () => {
  return (
    <View>
      <HeightSpacer height={20} />
      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ index, item }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Country item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
