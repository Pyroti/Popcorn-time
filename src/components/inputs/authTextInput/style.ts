import { View } from 'react-native';
import styled from 'styled-components';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Text, TextInput } from '../../styles/globalStyled';

export const AuthInput = styled(TextInput)`
  color: ${(props) => props.theme.colors.black};
  width: ${scale(240)}px;
  margin: ${Math.round(verticalScale(8))}px 0;
  padding: 0;
`;

export const AuthView = styled(View)<{ isFocused: boolean }>`
  width: ${scale(315)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${(props) => (props.isFocused ? props.theme.colors.black : props.theme.colors.textGray)};
  border-radius: 20px;
  margin: ${Math.round(verticalScale(12))}px 0;
  padding: ${Math.round(verticalScale(3))}px 0;
`;

export const AuthViewLeftContent = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AuthIcon = styled(View)`
  margin: 0 ${Math.round(moderateScale(8))}px;
`;

export const AuthErrorText = styled(Text)`
  color: ${(props) => props.theme.colors.alertRed};
`;

export const AuthLabelText = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  position: absolute;
  left: ${moderateScale(25)}px;
  top: ${verticalScale(4)}px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const AuthViewContainer = styled(View)`
  position: relative;
`;
