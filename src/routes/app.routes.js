import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Home as HomeIcon,
  User as UserIcon,
  PlusSquare as PlusSquareIcon
} from 'react-native-feather';

import { Home } from '../pages/Home';
import { NewPost } from '../pages/NewPost';
import { Profile } from '../pages/Profile';

import { colors } from '../styles';

const BottomTab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          backgroundColor: colors.BLACK_SECONDARY,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size}) => (
            <HomeIcon
              color={colors.WHITE_PRIMARY}
              size={size} 
            />
          )
        }}
      />
      <BottomTab.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <PlusSquareIcon
              color={colors.WHITE_PRIMARY}
              size={size}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <UserIcon
              fill={colors.WHITE_PRIMARY}
              size={size} 
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};