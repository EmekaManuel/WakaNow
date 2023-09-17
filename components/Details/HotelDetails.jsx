import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../constants/constants";
import ReUsableButton from "../Reusable/ReUsableButton";
import AppBar from "../Reusable/AppBar";
import NetworkImage from "../Reusable/NetworkImage";
import { useRoute } from "@react-navigation/native";
import ReUsableText from "../Reusable/ReUsableText";
import HeightSpacer from "../Reusable/HeightSpacer";
import { Rating } from "react-native-stock-star-rating";
import DescriptionText from "../Reusable/DescriptionText";
import reusableStyle from "../Reusable/ReUsableStyle.style";
import Map from "../Reusable/Map";
import { Feather } from "@expo/vector-icons";
import ReviewList from "./ReviewList";
const HotelDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  let coordinates = {
    id: item._id,
    title: item.title,
    latitude: item.latitude,
    longitude: item.longitude,
    latitudeDelta: item.latitudeDelta,
    longitudeDelta: item.longitudeDelta,
  };
  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          color={COLORS.white}
          color1={COLORS.lightWhite}
          top={45}
          left={20}
          right={20}
          title={item.title}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>

      <View style={styles.container}>
        <NetworkImage
          width={"100%"}
          height={220}
          borderRadius={20}
          source={item.ImageUrl}
        />
        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReUsableText
              text={item.title}
              family={"medium"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />
            <HeightSpacer height={5} />
            <ReUsableText
              text={item.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <HeightSpacer height={10} />
            <View style={reusableStyle.rowWithSpace("space-between")}>
              <Rating
                maxStars={5}
                stars={item.rating}
                bordered={false}
                color={"#FD9942"}
              />
              <ReUsableText
                text={`(${item.reviews})`}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 80 }]}>
          <ReUsableText
            text={"Description"}
            family={"bold"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />
          <DescriptionText text={item.description} />
          <HeightSpacer height={5} />

          <ReUsableText
            text={"Location"}
            family={"bold"}
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />

          <ReUsableText
            text={item.location}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.black}
          />
          <Map coordinates={coordinates} />
          <HeightSpacer height={10} />

          <View style={reusableStyle.rowWithSpace("space-between")}>
            <ReUsableText
              text={"Reviews"}
              family={"bold"}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <TouchableOpacity>
              <Feather size={20} name="list" />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={10} />

          <ReviewList reviews={item.review} />
        </View>
      </View>
      <View
        style={[reusableStyle.rowWithSpace("space-between"), styles.bottom]}
      >
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ReUsableText
              text={`\$ ${item.price}`}
              family={"bold"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <ReUsableText
              text={" / night"}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />
          </View>

          <HeightSpacer height={5} />
          <ReUsableText
            text={`${item.availability.start} - ${item.availability.end}`}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.black}
          />
        </View>
        <ReUsableButton
          onPress={() => navigation.navigate("Bottom")}
          buttonText={"Select a Room"}
          backgroundColor={COLORS.black}
          borderColor={COLORS.red}
          width={(SIZES.width - 50) / 2.25}
          borderWidth={0}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.white}
        />
      </View>
    </ScrollView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  hotelDetailStyle: {},
  container: {
    paddingTop: 20,
    marginHorizontal: 10,
  },
  titleColumn: { padding: 15 },
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },
  bottom: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightWhite,
    height: 80,
    paddingVertical: 20,
  },
});
