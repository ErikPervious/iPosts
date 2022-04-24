import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../../styles";
import { 
  ButtonChangeMethod,
  ButtonChangeMethodText,
  ButtonSendForm, 
  ButtonSendFormText
} from "./styled";

export function SignInButton({signInMethod, setSignInMethod, onPress, connectionState, setChange}) {

  const {setFullName, setEmail, setPassword} = setChange;

  return (
    <>
      <ButtonSendForm disabled={connectionState} onPress={onPress}>
        {connectionState
          ? <ActivityIndicator size={30} color={colors.WHITE_SECONDARY} />
          : <ButtonSendFormText>
            { !signInMethod ? 'ABRIR CONTA' : 'ENTRAR'  }
          </ButtonSendFormText>
        }
      </ButtonSendForm>
      <ButtonChangeMethod 
        onPress={() => {
          setFullName('');
          setEmail('');
          setPassword('');
          setSignInMethod(!signInMethod);
        }}
      >
        <ButtonChangeMethodText>
          { !signInMethod 
            ? 'Já tenho conta, fazer login.' 
            : 'Criar uma nova conta.'
          }
        </ButtonChangeMethodText>
      </ButtonChangeMethod>
    </>
  );
};