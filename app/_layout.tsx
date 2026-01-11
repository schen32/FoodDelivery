import useAuthStore from "@/store/auth.store";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const { isLoading, fetchAuthenticatedUser } = useAuthStore();

  const [fontsLoaded, error] = useFonts({
    quicksand: require("../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "quicksand-semibold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "quicksand-light": require("../assets/fonts/Quicksand-Light.ttf"),
    "quicksand-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  });
  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);
  if (!fontsLoaded || isLoading) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
