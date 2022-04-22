import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput`
  color: ${colors.WHITE_SECONDARY};
  width: 75%; 
  font-size: 16px;
  padding: 0px 0px 0px 5px;
  font-family: 'Poppins-Medium';
`;
export const Line = styled.View`
  width: 75%;
  height: 3px;
  background-color: ${colors.BLUE_PRIMARY+90};
  border-radius: 3px;
`;