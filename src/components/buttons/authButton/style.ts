import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Text } from '../../styles/globalStyled';

export const AuthButtonView = styled(TouchableOpacity)`
  margin-top: ${verticalScale(10)}px;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${scale(20)}px;
  width: ${scale(315)}px;
  height: ${verticalScale(35)}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AuthButtonText = styled(Text)`
  color: ${(props) => props.theme.colors.white};
`;
