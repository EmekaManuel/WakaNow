import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const COLORS = {
  blue: "#4267B2",
  red: "#EB6A58",
  green: "#449282",
  white: "#FBFBFB",
  lightWhite: "#FFFFFF",
  lightBlue: "#6885C1",
  lightRed: "#EB9C9B",
  lightGreen: "#73ADAI",
  black: "#121212",
  dark: "#3D3A45",
  gray: "#8C8896",
  lightGrey: "#D1CFDS",
};

export const SIZES = {
  Small: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

export const TEXT = {
  xxSmall: 11,
  xSmall: 13,
  small: 15,
  medium: 17,
  large: 21,
  xLarge: 27,
  xxLarge: 32,
};
