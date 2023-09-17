import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import NetworkImage from "../Reusable/NetworkImage";
import ReUsableText from "../Reusable/ReUsableText";
import AppBar from "../Reusable/AppBar";
import { COLORS, TEXT, SIZES } from "../../constants/constants";
import DescriptionText from "../Reusable/DescriptionText";
import reusableStyle from "../Reusable/ReUsableStyle.style";
import ReUsableButton from "../Reusable/ReUsableButton";
import { Feather } from "@expo/vector-icons";
import PopularList from "../Country/PopularList";
import HeightSpacer from "../Reusable/HeightSpacer";
const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScrollView>
      <View>
        <NetworkImage
          width={"100%"}
          height={350}
          borderRadius={10}
          source={item.ImageUrl}
        />
        <AppBar
          color={COLORS.white}
          color1={COLORS.lightWhite}
          top={40}
          left={20}
          right={20}
          title={item.country}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>
      <View style={styles.description}>
        <ReUsableText
          text={item.region}
          family={"bold"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />
        <DescriptionText text={item.description} />
        <HeightSpacer height={30} />

        <View style={{ alignContent: "center" }}>
          <View style={reusableStyle.rowWithSpace("space-between")}>
            <ReUsableText
              text="Popular Destinations"
              size={TEXT.large}
              color={COLORS.black}
              family="medium"
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={20} />
          <PopularList data={item.popular} />

          <ReUsableButton
            onPress={() => navigation.navigate("HotelSearch")}
            buttonText={"Find Hotel"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            family={"bold"}
            size={TEXT.small}
            color={COLORS.white}
          />
          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "F3F4F8",
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
