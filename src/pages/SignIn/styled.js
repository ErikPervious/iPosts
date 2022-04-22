import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.BLACK_TERTIARY};
`;
export const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ContainerEmpty = styled.View``;
export const ContainerForm = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;