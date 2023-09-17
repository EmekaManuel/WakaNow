import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/constants";
import reusableStyle from "../Reusable/ReUsableStyle.style";
import NetworkImage from "../Reusable/NetworkImage";
import WidthSpacer from "../Reusable/WidthSpacer";
import ReUsableText from "../Reusable/ReUsableText";
import Rating from "../Reusable/Rating";
import DescriptionText from "../Reusable/DescriptionText";

const ReviewTile = ({ review }) => {
  console.log(review.user.username);
  return (
    <View style={styles.reviewBorder}>
      <View style={reusableStyle.rowWithSpace("space-between")}>
        <View style={reusableStyle.rowWithSpace("flex-start")}>
          <NetworkImage
            width={54}
            height={54}
            borderRadius={50}
            source={review.user.profile_picture}
          />
          <WidthSpacer width={12} />
          <View style={{ width: "80%" }}>
            <View style={reusableStyle.rowWithSpace("space-between")}>
              <ReUsableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
              />
              <WidthSpacer width={"9%"} />

              <Rating rating={review.rating} />
              <WidthSpacer width={20} />
              <ReUsableText
                text={review.updated}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
              />
            </View>
            <DescriptionText text={review.reviewtext} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTile;

const styles = StyleSheet.create({
  reviewBorder: {
    paddingBottom: 10,
    borderBottomWidth: 0.3,
    borderColor: COLORS.lightGrey,
  },
});
