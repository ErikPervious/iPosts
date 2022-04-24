import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { NewPost } from "../pages/NewPost";
import { Profile } from "../pages/Profile";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'fade',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};