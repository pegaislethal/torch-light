import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          headerStyle: {
            height: 200,
          },
          tabBarActiveTintColor: "yellow",
          tabBarStyle: {
            backgroundColor: "black",
            position: "absolute",
            marginBottom: "4%",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"phone-portrait-outline"} color={color} />
            ),
          }}
        />
      </Tabs>
      
    </GestureHandlerRootView>
  );
}
