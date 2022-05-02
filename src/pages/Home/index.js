import React, { useContext, useEffect } from 'react';
import { Button, StatusBar, Text } from 'react-native';
import { Search as SearchIcon } from 'react-native-feather';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { FirebaseContext } from '../../contexts/useFirebase';

import { TabBarCustom } from '../../components/TabBarCustom';
import { HeaderCustom } from '../../components/HeaderCustom';

import { configIcon } from '../../utils/configIcon';

import { Container } from './styled';
import { colors } from '../../styles';

export function Home() {

  const { 
    LogOutOfFirebase, 
    setUser, 
    user 
  } = useContext(FirebaseContext);

  useEffect(() => {
    function getUserData() {
      const uid = auth().currentUser.uid;
      firestore().collection('Users').doc(uid).get()
      .then(snapshot => {
        setUser(snapshot.data());
      });
    };
    getUserData();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor={colors.BLACK_SECONDARY} />
      <HeaderCustom
        title="iPosts"
        iconRight={<SearchIcon {...configIcon} />}
        iconRightAction={() => {}}
      />
      <Text style={{marginLeft: 10, color: 'white'}}>Olá, {user.name}</Text>
      <Button title="sair" onPress={LogOutOfFirebase} />
      <TabBarCustom />
    </Container>
  );
}
