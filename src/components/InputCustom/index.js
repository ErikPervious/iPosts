import React, { useRef } from "react";  

import { 
  Container, 
  Input, 
  Line 
} from "./styled";
import { colors } from "../../styles";

export function InputCustom({fullName, setFullName, placeholder}) {

  return (
    <Container>
      <Input
        value={fullName}
        onChangeText={text => setFullName(text)}
        placeholder={placeholder}
        placeholderTextColor={colors.WHITE_SECONDARY+50}
        underlineColorAndroid="transparent"
      />
      <Line />
    </Container>
  )
}