import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  LogoutIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
export default function Profile() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <StatusBar style="dark" />
          <View className="relative">
            <Image
              className="w-full"
              source={require("../../assets/bgprofile.png")}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.5,
                backgroundColor: "#BD175E",
              }}
            />
          </View>
          <View className="absolute top-10 w-full items-center">
            <Text className="text-2xl text-white font-semibold">Profile</Text>
          </View>

          <View className="w-full items-center mt-[-50px]">
            <Image
              className="w-32 h-32 rounded-full"
              source={require("../../assets/bgprofile.png")}
            />
          </View>
          <View className="w-full items-center ">
            <Text className="text-xl font-semibold">Asim Rasheed</Text>
          </View>
          {/* /// profile intry */}
          <View className="w-full items-end">
            <TouchableOpacity>
              <Text className="font-semibold text-[#dd2374] px-8 text-base">
                save
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full px-6 my-5">
            <View>
              <Text className="font-medium text-[#dd2374]">Name</Text>
            </View>
            <TextInput
              className="w-full py-2 text-black border-b-2 border-[#DEDEDE]  "
              placeholder="M Arslan"
              placeholderTextColor="gray"
            />
            <View className="my-4">
              <Text className="font-medium text-[#dd2374]">Email</Text>
              <TextInput
                className="w-full py-2 text-black border-b-2 border-[#DEDEDE]  "
                placeholder="arsijr@gmail.com"
                placeholderTextColor="gray"
              />
            </View>
            <View className="my-4">
              <Text className="font-medium text-[#dd2374]">Phone No.</Text>
              <TextInput
                className="w-full py-2 text-black border-b-2 border-[#DEDEDE]  "
                placeholder="+92 333 1234567"
                placeholderTextColor="gray"
              />
            </View>
            <View className="my-4">
              <Text className="font-medium text-[#dd2374]">Password</Text>
              <TextInput
                className="w-full py-2 text-black border-b-2 border-[#DEDEDE]  "
                placeholder="98@smg"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View className="w-full items-start px-6 mb-4">
            <TouchableOpacity className="bg-red-600 rounded-full px-10 py-4 flex flex-row items-center justify-center gap-2">
              <Text className="font-semibold text-white text-base">Logout</Text>
              <ArrowLeftEndOnRectangleIcon
                name="home-filled"
                size="25"
                color="white"
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
