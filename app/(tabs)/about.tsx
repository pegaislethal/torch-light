import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{  flex: 1 }}>
      <View style={{backgroundColor:"gray",flex:1}}>   
           <Text>About Us </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
