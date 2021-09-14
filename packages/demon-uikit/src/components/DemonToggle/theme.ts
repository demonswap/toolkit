import { darkColors, lightColors } from "../../theme/colors";
import { DemonToggleTheme } from "./types";

export const light: DemonToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: DemonToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
