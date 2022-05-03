import React from "react";
import { 
  MoreVertical as MoreVerticalIcon,
  Heart as HeartIcon,
  Send as SendIcon
} from 'react-native-feather';
import { colors } from "../../styles";

import { configIcon } from "../../utils/configIcon";

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

const msg = `Lorem Ipsum is simply dummy text asdjfhaisjfhasklf sah fgashf gsaiof soif gsifgoasiufg sdfjdf hsaif shf ias fas fisfoais foidfh basf sf oof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`;

export function Post() {
  return (
    <Container>
      <ContainerHeader>
        <ContainerHeaderLeft>
          <HeaderAvatar
            source={require('../../assets/images/avatar.png')}
          />
          <Button>
            <HeaderTitle>Erik Matheus</HeaderTitle>
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
        <MainText>{msg}</MainText>
      </ContainerMain>
      <ContainerFooter>
        <ContainerFooterLeft>
          <Button>
            <HeartIcon
              width={27}
              height={27}
              color='#961818'
              fill='#961818'
            />
          </Button>
          <FooterAmountOfLikes>{57}</FooterAmountOfLikes>
          <Button>
            <SendIcon 
              width={24}
              height={24}
              color={colors.WHITE_SECONDARY}
            />
          </Button>
        </ContainerFooterLeft>
        <FooterPublicationTime>12:59</FooterPublicationTime>
      </ContainerFooter>
    </Container>
  )
}