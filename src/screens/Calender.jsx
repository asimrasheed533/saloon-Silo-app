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
import { Calendar, LocaleConfig } from "react-native-calendars";
import BackIcon from "../../assets/BackIcon";
export default function Calender() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="dark" />
        <View className="w-full flex-row justify-between items-center py-12  px-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" rounded-full bg-slate-100 p-3"
          >
            <BackIcon />
          </TouchableOpacity>
          <View className="absolute right-0 top-0 ">
            <Image
              source={require("../../assets/hlogo.png")}
              style={{ width: 300, height: 150 }}
            />
          </View>
        </View>
        <View className="flex-row items-center justify-center mx-8 px-12">
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
          onPress={openModal}
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
            Submit Booking
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View
        className={`absolute hidden items-center justify-center backdrop-blur-sm flex-1 top-0 bg-[#bd175fbd] w-full h-full `}
        style={{ display: modalVisible ? "flex" : "none" }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 30,
            margin: 32,
            paddingVertical: 48,
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              },
              android: {
                elevation: 5,
              },
            }),
          }}
        >
          <View className="absolute right-0 top-0 p-2 ">
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("../../assets/done.png")} />
          <View className="items-center px-2">
            <Text className="text-2xl font-bold mt-4">Booking Confirmed</Text>
            <Text className="text-sm px-4 text-center">
              "Thank you for allowing us to enhance your beauty and well-being."
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
