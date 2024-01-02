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
  CalendarIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  CalendarIcon as CalendarSolid,
} from "react-native-heroicons/solid";
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
        {/* <Stack.Screen name="ChooseService" component={ChooseService} /> */}
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <HomeIconSolid name="home-filled" size="34" color={color} />
            ) : (
              <HomeIcon name="home-filled" size="30" color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="ChooseService"
        component={ChooseService}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <CalendarSolid name="home-filled" size="34" color={color} />
            ) : (
              <CalendarIcon name="home-filled" size="30" color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <UserIconSolid name="home-filled" size="34" color={color} />
            ) : (
              <UserIcon name="home-outlined" size="30" color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
