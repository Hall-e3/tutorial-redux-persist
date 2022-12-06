import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BooksList, BookmarksList } from "../screens";

const Tab = createBottomTabNavigator();

// appearance of the bottom tab bar
const tabBarOptions = {
  showLabel: false,
  inactiveTintColor: "#2D3038",
  activeTintColor: "#FFFFFF",
  style: {
    height: "10%",
    backgroundColor: "#1E1B26",
  },
};

// addition of custom icon for each tab
const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "BooksList":
      iconName = "view-dashboard";
      break;
    case "BookmarksList":
      iconName = "bookmark-multiple-outline";
      break;
    default:
      break;
  }
  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BooksList"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          ...tabBarOptions,
          tabBarInactiveTintColor: tabBarOptions.inactiveTintColor,
          tabBarActiveTintColor: tabBarOptions.activeTintColor,
          tabBarStyle: {
            backgroundColor: tabBarOptions.style.backgroundColor,
            height: tabBarOptions.style.height,
            
          },
          tabBarShowLabel: tabBarOptions.showLabel,
        })}
      >
        <Tab.Screen name="BooksList" component={BooksList} />
        <Tab.Screen name="BookmarksList" component={BookmarksList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
