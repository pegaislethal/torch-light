import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Button, Text, Alert } from 'react-native';
import Torch from 'react-native-torch';

export default function HomeScreen() {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const handleTorchToggle = async () => {
    try {
      if (Platform.OS === "ios") {
        Torch.switchState(!isTorchOn);
        setIsTorchOn(!isTorchOn);
      } 
      else if (Platform.OS === "android") {
        const cameraAllowed = await Torch.requestCameraPermission(
          "Camera Permissions",
          "We require camera permissions to use the torch on the back of your phone."
        );

        if (cameraAllowed) {
          console.log("TorchSwitchState",Torch.switchState)
          // console.log(isTorchOn);
          Torch.switchState(!isTorchOn);
          setIsTorchOn(!isTorchOn);
        } else {
          console.log(Error);
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
    <View style={styles.container}>
      <Text style={styles.title}>Torch</Text>
      {/* <Image
        source={require('../../assets/torch.png')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      /> */}
      <Button
        title={isTorchOn ? "Turn Off" : "Turn On"}
        onPress={handleTorchToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
