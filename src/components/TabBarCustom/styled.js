import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  position: absolute;
  bottom: 18px;
  width: 70%;
  border-radius: 34px;
  background-color: ${colors.BLACK_SECONDARY};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0;
`;
export const ButtonIconNavigator = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  justify-content: center;
`;