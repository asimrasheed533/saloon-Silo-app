import React from "react";

import SplashLog from "../screens/SplashLog";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  HomeModernIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import ChooseService from "../screens/ChooseService";
import Calender from "../screens/Calender";
import Profile from "../screens/Profile";

export default function index() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initaialRouteName="SplashLog"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashLog" component={SplashLog} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="ChooseService" component={ChooseService} />
        <Stack.Screen name="Calender" component={Calender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#dd2374",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          presentation: "fullScreenModal",
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" color={color} size={"30"} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <UserIcon
                name="home-filled"
                size={size}
                color={color}
                style={{
                  backgroundColor: "gray",
                }}
              />
            ) : (
              <HomeModernIcon name="home-outlined" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarLabel: "",
          // tabBarIcon: ({ focused }) => {
          //   return (
          //     <View
          //       style={{
          //         alignItems: "center",
          //         justifyContent: "center",
          //         backgroundColor: focused ? "black" : "#dd2374",
          //         borderRadius: 30,
          //         height: 50,
          //         width: 50,
          //       }}
          //     >
          //       <UserIcon
          //         name="Profile"
          //         size={30}
          //         // color={focused ? "white" : "gray"}
          //         color="white"
          //       />
          //     </View>
          //   );
          // },
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <UserIcon name="home-filled" size={size} color={color} />
            ) : (
              <HomeModernIcon name="home-outlined" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
