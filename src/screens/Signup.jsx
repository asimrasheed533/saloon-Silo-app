import { StatusBar } from "expo-status-bar";
import React from "react";
import PhoneInput from "react-native-phone-input";
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
export default function Signup() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className="flex-1">
        <StatusBar style="light" />
        <View className="bg-[#dd2374] w-full h-[400px] items-center rounded-b-[30px]">
          <View className="mt-10">
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
              }}
              source={require("../../assets/Slogo.png")}
            />
          </View>
          <View className="w-full items-start justify-start px-8">
            <Text
              style={{
                fontSize: 22,
              }}
              className=" font-semibold text-white mt-4"
            >
              Sign Up
            </Text>
          </View>
        </View>

        <View className="bg-white mx-4 rounded-[30px] py-8 mt-[-140px] mb-8">
          <View
            style={{
              borderColor: "lightgray",
              borderBottomWidth: 1,
            }}
            className="mx-4 flex-row items-center rounded-full bg-red px-4"
          >
            <TextInput
              className="w-full py-2"
              placeholder="Name"
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
            <PhoneInput
              className="w-full py-2 text-black  "
              // ref={(ref) => { this.phone = ref; }}
              initialCountry={"pak"}
              initialValue="+92"
              textProps={{
                placeholder: "Enter a phone number...",
              }}
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
            style={{
              width: "70%",
            }}
            onPress={() => navigation.navigate("MyTabs")}
            className="
      bg-[#dd2374]
      mt-10
        rounded-full
        py-5
        self-center
        items-center
      "
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                textAlign: "center",
                color: "#FFFF",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="w-full items-center justify-center mt-4">
            <Text>
              Have account?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#dd2374", fontWeight: "bold" }}>
                  {" "}
                  Sign in
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
