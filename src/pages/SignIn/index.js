import React, { useContext, useState } from 'react';
import { ActivityIndicator, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Send as SendIcon } from 'react-native-feather';

import { FirebaseContext } from '../../contexts/useFirebase';

import { InputCustom } from '../../components/InputCustom';
import { SignInButton } from '../../components/SignInButton';

import {
  Container, 
  ContainerEmpty, 
  ContainerForm, 
  ContainerLogo
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
          <SendIcon
            width={140}
            height={140}
            color={colors.BLUE_PRIMARY}
            strokeWidth={1}
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
                fullName={fullName} 
                setFullName={setFullName}
                placeholder="Nome Completo"
              />
            }
            <InputCustom 
              fullName={email} 
              setFullName={setEmail}
              placeholder="Email"
            />
            <InputCustom 
              fullName={password} 
              setFullName={setPassword}
              placeholder="Senha"
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
