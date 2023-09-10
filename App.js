import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Onboarding, Search } from "./screens";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import CountryDetails from "./components/Details/CountryDetails";
import {
  HotelDetails,
  HotelList,
  PlaceDetails,
  Recommended,
} from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    light: Montserrat_300Light,
    regular: Montserrat_400Regular,
    medium: Montserrat_500Medium,
    bold: Montserrat_700Bold,
    extrabold: Montserrat_800ExtraBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CountryDetails"
          component={CountryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommended"
          component={Recommended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hotellist"
          component={HotelList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
