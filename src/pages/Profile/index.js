import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { 
  LogOut as LogOutIcon,
  MessageSquare as MessageSquareIcon,
  Heart as HeartIcon
} from 'react-native-feather';

import { FirebaseContext } from '../../contexts/useFirebase';

import { HeaderCustom } from '../../components/HeaderCustom';
import { TabBarCustom } from '../../components/TabBarCustom';

import { configIcon } from '../../utils/configIcon';

import { 
  Container, 
  ContainerProfileBox, 
  ContainerProfileInformation,
  Division,
  ProfileAvatar,
  ProfileName
} from './styled';
import { ShowQuantity } from '../../components/ShowQuantity';
import { colors } from '../../styles';

export function Profile() {

  const { user, LogOutOfFirebase } = useContext(FirebaseContext);

  return (
    <Container>
      <HeaderCustom
        title={user.name}
        iconRight={<LogOutIcon {...configIcon} onPress={LogOutOfFirebase} />}
      />
      <ContainerProfileInformation>
        <ProfileAvatar
          source={require('../../assets/images/avatar.png')}
        />
        <ProfileName>{user.name}</ProfileName>
        <ContainerProfileBox>
          <ShowQuantity
            icon={<MessageSquareIcon width={30} height={30} fill={colors.BLUE_PRIMARY} />}
            quantity={130}
          />
          <ShowQuantity
            icon={<HeartIcon width={30} height={30} fill="#961818" />}
            quantity={130}
          />
        </ContainerProfileBox>
        <Division />
      </ContainerProfileInformation>
      <TabBarCustom />
    </Container>
  );
}
