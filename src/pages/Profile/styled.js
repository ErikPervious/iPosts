import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.BLACK_TERTIARY};
`;
export const ContainerProfileInformation = styled.View`
  margin-top: 30px;
  align-items: center;
`;
export const ProfileAvatar = styled.Image`
  width: 100px;
  height: 100px;
`;
export const ProfileName = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: ${colors.WHITE_PRIMARY};
  font-family: 'Poppins-Regular';
`;
export const ContainerProfileBox = styled.View`
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;
export const Division = styled.View`
  margin: 30px 0;
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: ${colors.WHITE_SECONDARY+10};
`;
