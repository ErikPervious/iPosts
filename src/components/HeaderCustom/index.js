import React from "react";
import * as Feather from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";

import { configIcon } from "../../utils/configIcon";

import { 
  ButtonIcon,
  Container, 
  ContainerLeft, 
  ContainerRight, 
  Title 
} from "./styled";
import { colors } from "../../styles";

export function HeaderCustom(props) {

  const {
    buttonLeftIsVisible, 
    title, 
    iconRight, 
    iconRightAction, 
    iconRightIsLoading
  } = props;

  const navigation = useNavigation();

  function ButtonBackPressed() {
    navigation.goBack();
  };

  return (
    <Container>
      <ContainerLeft>
        { buttonLeftIsVisible &&
          <ButtonIcon onPress={ButtonBackPressed} >
            <Feather.ArrowLeftCircle
              {...configIcon}
              style={{marginRight: 10}}
            />
          </ButtonIcon>
        }
        <Title>{title ? title : 'iPosts'}</Title>
      </ContainerLeft>
      <ContainerRight>
        <ButtonIcon 
          onPress={iconRightAction}
          disabled={iconRightIsLoading}
        >
          {iconRight}
        </ButtonIcon>
      </ContainerRight>
    </Container>
  );
};