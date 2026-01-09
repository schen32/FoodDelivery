import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    quicksand: require("../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "quicksand-semibold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "quicksand-light": require("../assets/fonts/Quicksand-Light.ttf"),
    "quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
  });
  if (!loaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
