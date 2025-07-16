/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#f43f5e";
const tintColorDark = "#6366f1";

export const Colors = {
  light: {
    text: "#0f172a",
    background: "#f8fafc",
    tint: tintColorLight,
    icon: "#334155",
    tabIconDefault: "#334155",
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
  },
  dark: {
    text: "#f1f5f9",
    background: "#0f172a",
    tint: tintColorDark,
    icon: "#6366f1",
    tabIconDefault: "#94a3b8",
    tabIconSelected: tintColorDark,
    primary: tintColorDark,
    secondary: "#1e1b4b",
  },
};
