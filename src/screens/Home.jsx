import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const services = [
    {
      name: "Haircut",
      image: require("../../assets/splach.png"),
    },
    {
      name: "Beard",
      image: require("../../assets/splach.png"),
    },
    {
      name: "Haircut",
      image: require("../../assets/splach.png"),
    },
    {
      name: "Haircut & Beard",
      image: require("../../assets/splach.png"),
    },
    {
      name: "Haircut & Beard",
      image: require("../../assets/splach.png"),
    },
    {
      name: "Haircut & Beard",
      image: require("../../assets/splach.png"),
    },
  ];
  return (
    <ScrollView>
      <StatusBar style="light" />
      <View className="w-full px-4 py-12 rounded-b-[40px] bg-[#dd2374]  flex flex-row items-center justify-between">
        <View>
          <Text className="text-white text-2xl font-bold">Aslan 26!</Text>
          <Text className="text-white">What are you looking for today?</Text>
        </View>
        <View
          className="
        bg-black
        rounded-full"
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: "cover",
              borderRadius: 50,
            }}
            source={require("../../assets/splach.png")}
          />
        </View>
      </View>

      <View className="px-4">
        <Text className="text-2xl font-bold text-black mt-4">
          Special Offers
        </Text>
        {/* // banner slider */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={{
              resizeMode: "cover",
              marginTop: 10,
            }}
            source={require("../../assets/hbanner1.png")}
          />
          <Image
            style={{
              resizeMode: "cover",
              margin: 10,
            }}
            source={require("../../assets/hbanner2.png")}
          />
          <Image
            style={{
              resizeMode: "cover",
              margin: 10,
            }}
            source={require("../../assets/hbanner3.png")}
          />
        </ScrollView>
      </View>
      {/* // services container */}
      <View className="px-4">
        <Text className="text-2xl font-bold text-black mt-4">Services</Text>

        <View className="py-4 flex-wrap flex-row items-start justify-center gap-5">
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              className="items-center justify-center w-[100px]"
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
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChooseService")}
          className="
      bg-[#dd2374]
        rounded-full
        w-[70%]
        py-4
        mb-4
        self-center
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
            Choose Services
          </Text>
        </TouchableOpacity>
      </View>
      {/* // barber container */}

      <View className="px-4">
        <Text className="text-2xl font-bold text-black mt-4">
          Our Top Barbers
        </Text>
        {/* // banner slider */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mb-12"
        >
          <View className="bg-[#000000] rounded-2xl m-2">
            <Image
              style={{
                width: 140,
                resizeMode: "cover",
              }}
              source={require("../../assets/barder1.png")}
            />
            <View className="py-2">
              <Text className="font-medium text-white px-4">javii</Text>
            </View>
          </View>
          <View className="bg-[#000000] rounded-2xl m-2">
            <Image
              style={{
                width: 140,
                resizeMode: "cover",
              }}
              source={require("../../assets/barder1.png")}
            />
            <View className="py-2">
              <Text className="font-medium text-white px-4">javii</Text>
            </View>
          </View>
          <View className="bg-[#000000] rounded-2xl m-2">
            <Image
              style={{
                width: 140,
                resizeMode: "cover",
              }}
              source={require("../../assets/barder1.png")}
            />
            <View className="py-2">
              <Text className="font-medium text-white px-4">javii</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
