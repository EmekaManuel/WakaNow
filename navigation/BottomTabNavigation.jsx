import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/constants";
import Location from "../screens/Location";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";

const Tab = createBottomTabNavigator();

const TabBarStyle = {
  paddingTop: 10,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 10,
  height: 70,
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
  justifyContent: "center", // Center the icons vertically
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: "#EB6A58",
        inactiveTintColor: "#3e2465",
        headerShown: false,
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      {/* // a tab */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: TabBarStyle,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
      {/* // a tab */}
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarStyle: TabBarStyle,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "location" : "location-outline"}
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
      {/* // a tab */}
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarStyle: TabBarStyle,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
              }
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
      {/* // a tab */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: TabBarStyle,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
