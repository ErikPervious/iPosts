import React, { useRef, useState } from "react";  
import {
  Eye as EyeIcon,
  EyeOff as EyeOffIcon
} from 'react-native-feather';

import { 
  ButtonPasswordVisible,
  Container, 
  Input
} from "./styled";
import { colors } from "../../styles";

export function InputCustom(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    value, 
    onChange, 
    placeholder,
    isPassword
  } = props;

  return (
    <Container>
      <Input
        value={value}
        onChangeText={text => onChange(text)}
        placeholder={placeholder}
        placeholderTextColor={colors.WHITE_SECONDARY+50}
        underlineColorAndroid="transparent"
        secureTextEntry={passwordVisible}
      />
      {isPassword &&
        <ButtonPasswordVisible onPress={()=>setPasswordVisible(!passwordVisible)}>
          { !passwordVisible
            ? <EyeOffIcon color={colors.WHITE_SECONDARY} />
            : <EyeIcon color={colors.WHITE_SECONDARY} />
          }
        </ButtonPasswordVisible>
      }
    </Container>
  )
}