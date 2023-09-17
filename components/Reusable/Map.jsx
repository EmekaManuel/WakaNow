import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
const Map = ({ coordinates }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <MapView style={styles.map} region={coordinates}>
        <Marker coordinate={coordinates} title={coordinates.title}></Marker>
      </MapView>
    </TouchableOpacity>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 120,
    width: "100%",
    borderRadius: 12,
    marginVertical: 10,
  },
});
