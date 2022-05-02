import React from 'react';
import { Text } from 'react-native';
import { Send as SendIcon } from 'react-native-feather';

import { HeaderCustom } from '../../components/HeaderCustom';
import { TabBarCustom } from '../../components/TabBarCustom';

import { configIcon } from '../../utils/configIcon';

import { Container } from './styled';

export function NewPost() {
  return (
    <Container>
      <HeaderCustom
        buttonLeftIsVisible={true}
        title="Novo Post"
        iconRight={<SendIcon {...configIcon} />}
      />
      <Text>NewPost</Text>
    </Container>
  );
}
