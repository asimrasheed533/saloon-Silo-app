import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { CheckBadgeIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";

export default function ChooseService() {
  const navigation = useNavigation();
  const [services, setServices] = useState([
    {
      name: "Haircut",
      image: require("../../assets/splach.png"),
      isSelected: false,
    },
    {
      name: "Beard",
      image: require("../../assets/splach.png"),
      isSelected: false,
    },
    {
      name: "Haircut",
      image: require("../../assets/splach.png"),
      isSelected: false,
    },
    {
      name: "Haircut & Beard",
      image: require("../../assets/splach.png"),
      isSelected: false,
    },
    {
      name: "Haircut & Beard",
      image: require("../../assets/splach.png"),
      isSelected: false,
    },
    {
      name: "Haircut & Beard",
      image: require("../../assets/splach.png"),
      isSelected: false,
    },
  ]);
  const toggleSelection = (index) => {
    const updatedServices = [...services];
    updatedServices[index].isSelected = !updatedServices[index].isSelected;
    setServices(updatedServices);
    console.log(services[index].isSelected);
  };
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
          <Text className="text-[#e9e9e9]">____________</Text>
        </View>
        <View className="bg-[#EAEAEA] h-20 w-20 rounded-full justify-center items-center">
          <Text className="text-2xl text-white">2</Text>
        </View>
      </View>
      <ScrollView className="p-4">
        <Text className="text-2xl font-medium text-black mt-4">
          Select Services
        </Text>
        <View className="py-4 flex-wrap flex-row items-start justify-center gap-5">
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              className="items-center justify-center w-[100px]"
              onPress={() => toggleSelection(index)}
            >
              <Image
                style={{
                  resizeMode: "cover",
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                }}
                source={service.image}
              />
              <Text className="text-center p-2">{service.name}</Text>
              {/* Checkmark or any other indicator */}
              {service.isSelected && (
                <CheckBadgeIcon
                  name="home-filled"
                  size="34"
                  color="green"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 1,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Choose Services Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#dd2374",
          borderRadius: 25,
          paddingVertical: 12,
          marginBottom: 20,
          marginHorizontal: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            textAlign: "center",
            color: "#FFFF",
          }}
        >
          Choose Services
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
