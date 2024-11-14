import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Brightness from 'expo-brightness';

export default function BrightnessControl() {
  const [brightness, setBrightness] = useState(1);

  // Set the brightness value when slider changes
  const handleBrightnessChange = async (value: number) => {
    setBrightness(value);
    await Brightness.setSystemBrightnessAsync(value);
  };

  // Get current system brightness when component mounts
  const getCurrentBrightness = async () => {
    const currentBrightness = await Brightness.getSystemBrightnessAsync();
    setBrightness(currentBrightness);
  };

  // Call to get the current brightness when the component loads
  React.useEffect(() => {
    getCurrentBrightness();
  }, []);

  return (
    <View style={styles.container}>

       <Text style={styles.title}>Brightness Control: {brightness.toFixed(1)}</Text>
        
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={brightness}
        onValueChange={handleBrightnessChange}
        thumbTintColor="#FF6347"
        minimumTrackTintColor="#FF6347"
        maximumTrackTintColor="#DDDDDD"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: "white",
    marginLeft:-180
  },
  slider: {
    width: '80%',
    height: 40,
  },
});
