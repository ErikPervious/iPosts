import React from 'react';
import { Text } from 'react-native';

import { TabBarCustom } from '../../components/TabBarCustom';

import { Container } from './styled';

export function Profile() {
  return (
    <Container>
      <Text>Profile</Text>
      <TabBarCustom />
    </Container>
  );
}
