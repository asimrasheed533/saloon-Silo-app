import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SplashLog");
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#BD175E",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View>
        <Image source={require("../../assets/Slogo.png")} />
      </View>
    </View>
  );
}
