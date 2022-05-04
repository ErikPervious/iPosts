import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { Settings as SettingsIcon } from 'react-native-feather';

import { FirebaseContext } from '../../contexts/useFirebase';

import { HeaderCustom } from '../../components/HeaderCustom';
import { TabBarCustom } from '../../components/TabBarCustom';

import { configIcon } from '../../utils/configIcon';

import { Container } from './styled';

export function Profile() {

  const { user, LogOutOfFirebase } = useContext(FirebaseContext);

  return (
    <Container>
      <HeaderCustom
        title={user.name}
        iconRight={<SettingsIcon {...configIcon} />}
      />
      <Text>Profile</Text>
      <Button title="sair" onPress={LogOutOfFirebase} />
      <TabBarCustom />
    </Container>
  );
}
