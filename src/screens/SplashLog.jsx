import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
export default function SplashLog() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        className="w-full h-full"
        source={require("../../assets/splach.png")}
      />
      <View
        className="
        bg-white
        items-center
        justify-center
        absolute
        bottom-[300px]
        rounded-2xl
        py-5
        px-4
        self-center"
      >
        <Text
          style={{
            fontSize: 24,
            color: "#1E1E1E",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Let us make your day
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          welcome to SwiftTrim, where grooming meets convenience. Choose your
          path to a sharper look:
        </Text>
      </View>
      {/* log in buttons */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="
      bg-[#dd2374]
        absolute
        bottom-[200px]
        rounded-full
        w-[70%]
        py-5
        self-center
        items-center
      "
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            textAlign: "center",
            color: "#FFFF",
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        className="
bg-white
absolute
bottom-[120px]
rounded-full
w-[70%]
py-5
self-center
items-center
"
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            textAlign: "center",
            color: "#BD175E",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
