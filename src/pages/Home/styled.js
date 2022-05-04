import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.BLACK_TERTIARY};
`;
export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const SafeArea = styled.View`
  padding: 0 20px;
  align-items: center;
`;
