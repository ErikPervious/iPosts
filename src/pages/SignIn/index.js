import React, { useContext, useState } from 'react';
import { ActivityIndicator, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { FirebaseContext } from '../../contexts/useFirebase';

import { InputCustom } from '../../components/InputCustom';
import { SignInButton } from '../../components/SignInButton';

import {
  Container, 
  ContainerEmpty, 
  ContainerForm, 
  ContainerLogo,
  ImageLogo
} from './styled';
import { colors } from '../../styles';

export function SignIn() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInMethod, setSignInMethod] = useState(false); // "false" is LogOn, "true" is LogIn

  const { 
    LogInInFirebase,
    LogOnInFirebase,
    connectionState
  } = useContext(FirebaseContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor={colors.BLACK_TERTIARY} />
        <ContainerLogo>
          <ImageLogo
            source={require('../../assets/images/send.png')}
            resizeMode="contain"
          />
        </ContainerLogo>
        { connectionState ? (
          <ContainerEmpty>
            <ActivityIndicator size={50} color={colors.BLUE_PRIMARY} />
          </ContainerEmpty>
        ) : (
          <ContainerForm>
            { !signInMethod && 
              <InputCustom 
                value={fullName} 
                onChange={setFullName}
                placeholder="Nome Completo"
              />
            }
            <InputCustom 
              value={email} 
              onChange={setEmail}
              placeholder="Email"
            />
            <InputCustom 
              value={password} 
              onChange={setPassword}
              placeholder="Senha"
              isPassword={true}
            />
            <SignInButton
              signInMethod={signInMethod}
              onPress={() => {
                !signInMethod 
                ? LogOnInFirebase(fullName, email, password)
                : LogInInFirebase(email, password)
              }}
              setSignInMethod={setSignInMethod}
            />
          </ContainerForm>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}
