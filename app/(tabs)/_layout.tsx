import { Tabs } from "expo-router";
import React, { useCallback } from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerNavigationProp } from '@react-navigation/drawer';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  // const openDrawer = useCallback(() => {
  //   navigation.dispatch(DrawerActions.openDrawer());
  // }, [navigation]);
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
       {/* <Tabs.Screen
        name="Drawer"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={22} color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable {...props} onPress={openDrawer} />
          ),
        }}
      /> */}

        
      </Tabs>
    </GestureHandlerRootView>
  );
}
