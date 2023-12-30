import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { Calendar, LocaleConfig } from "react-native-calendars";
export default function Calender() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="w-full flex-row justify-between items-center py-12  px-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" rounded-full bg-slate-100 p-3"
        >
          <ChevronLeftIcon size={20} strokeWidth={4} color="#dd2374" />
        </TouchableOpacity>
        <View className="absolute right-0 top-0 ">
          <Image
            source={require("../../assets/hlogo.png")}
            style={{ width: 300, height: 150 }}
          />
        </View>
      </View>
      <View className="flex-row items-center justify-between mx-8 px-12">
        <View className="bg-[#dd2374] h-20 w-20 rounded-full justify-center items-center">
          <Text className="text-2xl text-white">1</Text>
        </View>
        <View>
          <Text className="text-[#dd2374]">____________</Text>
        </View>
        <View className="bg-[#dd2374] h-20 w-20 rounded-full justify-center items-center">
          <Text className="text-2xl text-white">2</Text>
        </View>
      </View>
      <View>
        <Text className="text-2xl font-semibold mt-8 px-4">Choose Date</Text>
      </View>
      <View>
        <Text className="text-sm px-4">Select the date when you meet</Text>
      </View>
      <View>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Calender")}
        className="
      bg-[#000000]
        rounded-full
        py-4
        px-8
        mx-14
        items-center"
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            textAlign: "center",
            color: "#FFFF",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
