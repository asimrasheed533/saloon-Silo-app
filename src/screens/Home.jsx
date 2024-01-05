import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();

  services = [
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
              width: 60,
              height: 60,
              resizeMode: "cover",
              borderRadius: 50,
            }}
            source={require("../../assets/bgprofile.png")}
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
        <View className="flex-1 justify-between flex-row items-center">
          <Text className="text-xl font-bold text-black mt-4">
            What are you looking for?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChooseService")}
          >
            <Text className="text-sm font-medium  mt-4 text-[#dd2374]">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View className="py-4 flex-wrap flex-row items-center justify-center gap-5">
          <ServicesCard
            text="HairCut"
            image={require("../../assets/barder1.png")}
          />
          <ServicesCard
            text="NailCut"
            image={require("../../assets/barder1.png")}
          />
          <ServicesCard
            text="HairPainting"
            image={require("../../assets/barder1.png")}
          />
          <ServicesCard
            text="HairCut"
            image={require("../../assets/barder1.png")}
          />
        </View>
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

function ServicesCard({ text, image }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
      }}
    >
      <Image
        style={{
          width: 170,
          resizeMode: "cover",
          borderRadius: 10,
        }}
        source={image}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text className="text-white">{text}</Text>
      </View>
    </View>
  );
}
