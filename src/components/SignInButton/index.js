import React from "react";
import { 
  ButtonChangeMethod,
  ButtonChangeMethodText,
  ButtonSendForm, 
  ButtonSendFormText
} from "./styled";

export function SignInButton({signInMethod, setSignInMethod, onPress }) {
  return (
    <>
      <ButtonSendForm onPress={onPress}>
        <ButtonSendFormText>
          { !signInMethod ? 'ABRIR CONTA' : 'ENTRAR'  }
        </ButtonSendFormText>
      </ButtonSendForm>
      <ButtonChangeMethod onPress={() => setSignInMethod(!signInMethod)}>
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