import { Stack } from "expo-router";

function RootLayoutNav() {
  // const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(user)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayoutNav;
