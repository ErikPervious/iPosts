import React from "react";
import {
  Home as HomeIcon,
  PlusSquare as PlusSquareIcon,
  User as UserIcon
} from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

import { configIcon } from "../../utils/configIcon";

import { 
  ButtonIconNavigator, 
  Container 
} from "./styled";
import { colors } from "../../styles";

export function TabBarCustom() {
  const navigation = useNavigation();
  
  function navigateToPage(routeName) {
    navigation.navigate(routeName);
  };

  return (
    <Container>
      <ButtonIconNavigator
        onPress={() => navigateToPage('Home')}
      >
        <HomeIcon
          {...configIcon}
        />
      </ButtonIconNavigator>
      <ButtonIconNavigator
        onPress={() => navigateToPage('NewPost')}
      >
        <PlusSquareIcon
          {...configIcon}
        />
      </ButtonIconNavigator>
      <ButtonIconNavigator
        onPress={() => navigateToPage('Profile')}
      >
        <UserIcon
          {...configIcon}
        />
      </ButtonIconNavigator>
    </Container>
  );
};