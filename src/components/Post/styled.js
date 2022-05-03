import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  margin: 15px 0;
  width: 90%;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerHeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const HeaderAvatar = styled.Image`
  width: 40px;
  height: 40px;
`;
export const HeaderTitle = styled.Text`
  margin-left: 10px;
  font-size: 17px;
  color: ${colors.WHITE_PRIMARY};
  font-family: 'Poppins-Bold';
`;
export const ContainerMain = styled.View`
  margin-top: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;
export const MainText = styled.Text`
  font-size: 14px;
  line-height: 19px;
  color: ${colors.WHITE_SECONDARY};
  font-family: 'Poppins-Regular';
`;
export const ContainerFooter = styled.View`
  padding: 0 10px;
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerFooterLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const FooterAmountOfLikes = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Bold';
  color: ${colors.WHITE_SECONDARY};
  margin-left: 5px;
  margin-right: 10px;
`;
export const FooterPublicationTime = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${colors.WHITE_SECONDARY};
`;
export const Button = styled.TouchableOpacity`
`;