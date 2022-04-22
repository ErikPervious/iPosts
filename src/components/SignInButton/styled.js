import styled from 'styled-components/native';
import { colors } from '../../styles';

export const ButtonSendForm = styled.TouchableOpacity`
  padding: 12px 25px;
  border-radius: 12px;
  margin-top: 20px;
  background-color: ${colors.BLUE_PRIMARY};
`;
export const ButtonSendFormText = styled.Text`
  color: ${colors.WHITE_PRIMARY};
  font-weight: bold;
  font-size: 16px;
  font-family: 'Poppins-Bold';
`;
export const ButtonChangeMethod = styled.TouchableOpacity``;
export const ButtonChangeMethodText = styled.Text`
  color: ${colors.WHITE_SECONDARY};
  padding: 10px;
  font-size: 13px;
`;

