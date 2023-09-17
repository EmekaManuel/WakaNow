import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewTile from "../Tiles/ReviewTile";

const ReviewList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={(item) => (
        <View style={{ marginBottom: 10 }}>
          <ReviewTile review={item.item} />
        </View>
      )}
    />
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
