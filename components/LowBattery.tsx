import React, { useEffect } from "react";
import { Alert, View, Text, Pressable } from "react-native";
import { useBatteryLevel } from "expo-battery";

export default function BatteryStatus() {
  const batteryLevel = useBatteryLevel();
  const batteryPercentage = batteryLevel !== null ? Math.round(batteryLevel * 100) : null;
  useEffect(() => {
    if (batteryPercentage !== null && batteryPercentage < 15) {
      Alert.alert(
        "Low Battery Alert",
        "Use flashlight carefully to save battery or reduce brightness"
      );
    }
  }, [batteryPercentage]);

  return (
    <View>
      <Pressable onPress={() => console.log("Battery Level:", batteryPercentage + "%")}>
        <Text style={{ color: "white", fontWeight: "600" }}>Check Battery</Text>
      </Pressable>
      <Text style={{ color: "white", fontSize: 12 }}>
        Current Battery Level: {batteryPercentage !== null ? batteryPercentage + "%" : "Loading..."}
      </Text>
    </View>
  );
}
