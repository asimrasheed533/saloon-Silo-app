import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <View className="bg-[#dd2374] w-full h-[400px] items-center rounded-b-[30px]">
        <View className="mt-20">
          <Image source={require("../../assets/Slogo.png")} />
        </View>
        <View className="w-full items-start justify-start px-12">
          <Text className="text-2xl font-semibold text-white mt-4">Login</Text>
        </View>
      </View>
      <View className="bg-white mx-4 rounded-[30px] py-12 absolute bottom-[200px] ">
        <View
          style={{
            borderColor: "lightgray",
            borderBottomWidth: 1,
          }}
          className="mx-4 flex-row items-center rounded-full bg-red px-4"
        >
          <TextInput
            className="w-full py-2"
            placeholder="Email"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            borderColor: "lightgray",
            borderBottomWidth: 1,
            marginTop: 20,
          }}
          className="mx-4 flex-row items-center rounded-full  px-4"
        >
          <TextInput
            className="w-full py-2 text-black  "
            placeholder="Password"
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="
      bg-[#dd2374]
      mt-10
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
      </View>
      <View className="w-full items-center justify-center absolute bottom-[160px] ">
        <Text>
          New User?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#dd2374", fontWeight: "bold" }}>
              {" "}
              Create account
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
