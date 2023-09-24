import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { recommendations } from "../../data";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeightSpacer, ReUsableTile, reusableStyle } from "../../components";
import { COLORS, SIZES } from "../../constants/constants";
import { Feather } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  return (
    <SafeAreaView style={reusableStyle.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="browse for destination"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather size={20} name="search" color={COLORS.white} />
        </TouchableOpacity>
      </View>
      {search.length === 0 ? (
        <View>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/images/svg.png")}
          />
        </View>
      ) : (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <ReUsableTile
                onPress={() => navigation.navigate("PlaceDetails", { item })}
                item={item}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  imageStyle: {
    resizeMode: "contain",
    width: "100%",
    height: SIZES.height / 1.5,
    paddingHorizontal: 20,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  tile: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
});
