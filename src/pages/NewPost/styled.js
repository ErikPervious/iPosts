import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.BLACK_TERTIARY};
`;
export const ContainerInput = styled.View`
  margin: 0 20px;
  margin-top: 10px;
`;
export const Input = styled.TextInput`
  color: ${colors.WHITE_PRIMARY};
  font-family: 'Poppins-Regular';
  font-size: 18px;
`;
export const ContainerCharacters = styled.View`
  margin-left: 20px;
`;
export const CharactersText = styled.Text`
  color: ${colors.WHITE_SECONDARY+50};
`;