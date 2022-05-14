import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const QuantityText = styled.Text`
  margin-left: 5px;
  font-family: 'Poppins-Bold';
  color: ${colors.WHITE_PRIMARY};
`;