import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/constants";
import Location from "../screens/Location";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import { useRef } from "react";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: COLORS.red,
          inactiveTintColor: COLORS.gray,
          showLabel: false,
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            left: 20,
            right: 20,
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
          },
        }}
      >
        {/* Home Tab */}
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name={focused ? "grid" : "grid-outline"}
                  size={24}
                  color={focused ? COLORS.red : COLORS.gray}
                />
              </View>
            ),
          }}
        />
        {/* Location Tab */}
        <Tab.Screen
          name={"Location"}
          component={Location}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name={focused ? "location" : "location-outline"}
                  size={24}
                  color={focused ? COLORS.red : COLORS.gray}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        {/* Chat Tab */}
        <Tab.Screen
          name={"Chat"}
          component={Chat}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name={
                    focused
                      ? "chatbubble-ellipses"
                      : "chatbubble-ellipses-outline"
                  }
                  size={24}
                  color={focused ? COLORS.red : COLORS.gray}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        {/* Profile Tab */}
        <Tab.Screen
          name={"Profile"}
          component={Profile}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? COLORS.red : COLORS.gray}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
