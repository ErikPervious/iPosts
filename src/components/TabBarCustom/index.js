import React from "react";
import {
  Home as HomeIcon,
  PlusSquare as PlusSquareIcon,
  User as UserIcon
} from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

import { 
  ButtonIconNavigator, 
  Container 
} from "./styled";
import { colors } from "../../styles";

export function TabBarCustom() {
  const navigation = useNavigation();
  
  function navigateToPage(routeName) {
    navigation.navigate(routeName);
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: routeName }],
    // });
  };

  return (
    <Container>
      <ButtonIconNavigator
        onPress={() => navigateToPage('Home')}
      >
        <HomeIcon
          color={colors.WHITE_PRIMARY}
          width={30}
          height={30}
        />
      </ButtonIconNavigator>
      <ButtonIconNavigator
        onPress={() => navigateToPage('NewPost')}
      >
        <PlusSquareIcon
          color={colors.WHITE_PRIMARY}
          width={30}
          height={30}
        />
      </ButtonIconNavigator>
      <ButtonIconNavigator
        onPress={() => navigateToPage('Profile')}
      >
        <UserIcon
          color={colors.WHITE_PRIMARY}
          width={30}
          height={30}
        />
      </ButtonIconNavigator>
    </Container>
  );
};