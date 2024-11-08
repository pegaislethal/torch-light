import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function MenuDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="General" component={GeneralScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

function AboutScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <Text style={{ color: "white", padding: 20 }}>About Us </Text>
      </View>
    </SafeAreaView>
  );
}

function GeneralScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <Text style={{ color: "white", padding: 20 }}>General Screen </Text>
      </View>
    </SafeAreaView>
  );
}
