import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{  flex: 1 }}>
      <View style={{backgroundColor:"black",flex:1}}>   
           <Text style={{color:"white",padding:20}}>About Us </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
