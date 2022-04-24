import React from 'react';
import { Text } from 'react-native';

import { TabBarCustom } from '../../components/TabBarCustom';

import { Container } from './styled';

export function NewPost() {
  return (
    <Container>
      <Text>NewPost</Text>
      <TabBarCustom />
    </Container>
  );
}
