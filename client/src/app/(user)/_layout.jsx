import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function UnauthTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color='black' />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: "Upload",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="plus-square-o" size={24} color='black' />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color='black' />
          ),
        }}
      />
    </Tabs>
  );
}
