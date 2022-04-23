import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  width: 75%;
  align-items: start;
  flex-direction: row;
  padding: 2px 10px;
  background-color: ${colors.BLACK_SECONDARY};
  align-items: center;
  margin-bottom: 15px;
  border-radius: 7px;
`;
export const Input = styled.TextInput`
  flex: 1;
  color: ${colors.WHITE_SECONDARY};
  font-size: 16px;
  font-family: 'Poppins-Medium';
`;
export const ButtonPasswordVisible = styled.TouchableOpacity`
`;