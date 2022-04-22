import React, { useContext, useEffect } from 'react';
import { Button, Text } from 'react-native';
import { FirebaseContext } from '../../contexts/useFirebase';

import { Container } from './styled';

export function Home() {

  const { LogOutOfFirebase, user } = useContext(FirebaseContext);

  return (
    <Container>
      <Text style={{marginLeft: 10, color: 'white'}}>Olá, {user.name}</Text>
      <Button title="sair" onPress={LogOutOfFirebase} />
    </Container>
  );
}
