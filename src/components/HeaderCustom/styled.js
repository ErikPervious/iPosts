import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${colors.BLACK_SECONDARY};
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerLeft = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.BLUE_PRIMARY};
  line-height: 30px;
  font-family: 'Poppins-Bold';
`;
export const ContainerRight = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ButtonIcon = styled.TouchableOpacity``;