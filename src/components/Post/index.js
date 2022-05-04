import React from "react";
import { 
  MoreVertical as MoreVerticalIcon,
  Heart as HeartIcon,
  Send as SendIcon
} from 'react-native-feather';

import { colors } from "../../styles";

import { 
  Button,
  Container, 
  ContainerFooter, 
  ContainerFooterLeft, 
  ContainerHeader, 
  ContainerHeaderLeft,
  ContainerMain,
  FooterAmountOfLikes,
  FooterPublicationTime,
  HeaderAvatar,
  HeaderTitle,
  MainText
} from "./styled";

export function Post(props) {

  const { 
    author, 
    name, 
    content, 
    likes, 
    createdIn, 
    position
  } = props;

  return (
    <Container>
      <ContainerHeader>
        <ContainerHeaderLeft>
          <HeaderAvatar
            source={require('../../assets/images/avatar.png')}
          />
          <Button>
            <HeaderTitle>{name}</HeaderTitle>
          </Button>
        </ContainerHeaderLeft>
        <Button>
          <MoreVerticalIcon 
            width={27}
            height={27}
            color={colors.WHITE_SECONDARY}
          />
        </Button>
      </ContainerHeader>
      <ContainerMain>
        <MainText>{content}</MainText>
      </ContainerMain>
      <ContainerFooter>
        <ContainerFooterLeft>
          <Button>
            <HeartIcon
              width={27}
              height={27}
              color={colors.WHITE_SECONDARY}
              // fill='#961818'
            />
          </Button>
          <FooterAmountOfLikes>{likes}</FooterAmountOfLikes>
          <Button onPress={() => alert('teste')}>
            <SendIcon 
              width={24}
              height={24}
              color={colors.WHITE_SECONDARY}
            />
          </Button>
        </ContainerFooterLeft>
        <FooterPublicationTime>{createdIn}</FooterPublicationTime>
      </ContainerFooter>
    </Container>
  )
}