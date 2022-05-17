import React, { useContext } from "react";
import * as Feather from 'react-native-feather';
import { useNavigation } from "@react-navigation/native";

import { configIcon } from "../../utils/configIcon";

import { 
  ButtonIcon,
  ButtonWithoutFeedback,
  Container, 
  ContainerLeft, 
  ContainerRight, 
  Title 
} from "./styled";
import { FirebaseContext } from "../../contexts/useFirebase";

export function HeaderCustom(props) {

  const {
    buttonLeftIsVisible, 
    title, 
    iconRight, 
    iconRightAction, 
    iconRightIsLoading
  } = props;

  const { getPosts } = useContext(FirebaseContext);

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
        <ButtonWithoutFeedback
          onPress={() => title === 'iPosts' && getPosts()}
        >
          <Title>{title ? title : 'iPosts'}</Title>
        </ButtonWithoutFeedback>
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