import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();
const RouterLayout = () => {
  const [fontsLoadded, error] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (!fontsLoadded) SplashScreen.hideAsync();
  }, [fontsLoadded, error]);
  if (!fontsLoadded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RouterLayout;
