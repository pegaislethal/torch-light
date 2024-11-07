import React, { useState } from "react";
import { StyleSheet, Platform, View, Button, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Torch from "react-native-torch";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function HomeScreen() {
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handleTorchToggle = async () => {
    try {
      if (Platform.OS === "ios") {
        Torch.switchState(!isTorchOn);
        setIsTorchOn((prevState) => !prevState);
      } else if (Platform.OS === "android") {
        const cameraAllowed = await Torch.requestCameraPermission(
          "Camera Permissions",
          "We require camera permissions to use the torch on the back of your phone."
        );
        if (cameraAllowed) {
          Torch.switchState(!isTorchOn);
          setIsTorchOn((prevState) => !prevState);
        } else {
          Alert.alert(
            "Permission Denied",
            "Camera permission is required to use the torch."
          );
        }
      }
    } catch (error) {
      console.log("Error toggling torch:", error);
      Alert.alert(
        "Error",
        "An error occurred while trying to toggle the torch."
      );
    }
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Torchly</Text>
        </View>
        <View style={{ marginRight: "-60%", marginTop: "-15%" }}>
          
        </View>
        <View style={styles.button}>
          <Button
            title={isTorchOn ? "Turn Off" : "Turn On"}
            onPress={handleTorchToggle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    color: "#D3CBCB",
  },
  button: {
    width: "auto",
    height: 50,
    marginTop: "80%",
    justifyContent: "center",
  },
});
