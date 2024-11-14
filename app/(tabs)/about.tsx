import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import BrightnessCOntrol from "@/components/Brightness";
import LowBattery from "@/components/LowBattery";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>About Us </Text>
        <View style={styles.container}>
          <BrightnessCOntrol />
          <View style={[styles.container, styles.battery]}>
            <LowBattery />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    borderRadius: 20,
    justifyContent: "center",
  },
  text: { color: "white", padding: 20 },
  battery:{
    margin: 10,
    left: 10,
    top: 10,
  }
});
