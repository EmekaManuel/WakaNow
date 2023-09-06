import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusableStyle from "../components/Reusable/ReUsableStyle.style";
const Home = () => {
  return (
    <SafeAreaView style={reusableStyle.container}>
      <View>
        <View style={reusableStyle.rowWithSpace("space-between")}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
