import styled from 'styled-components';
import { View, Pressable } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Text } from '../globalStyled';

export const AuthView = styled(Pressable)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const AuthTitle = styled(Text)`
  font-size: ${moderateScale(29)}px;
  color: ${(props) => props.theme.colors.main};
  margin-bottom: ${verticalScale(45)}px;
`;

export const AuthTextInputContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Spoiler = styled(Text)`
  color: ${(props) => props.theme.colors.grayText};
  font-size: ${moderateScale(12)}px;
`;

export const SingUpButton = styled(Text)`
  color: ${(props) => props.theme.colors.main};
  font-size: ${moderateScale(14)}px;
  margin-left: ${scale(5)}px;
`;

export const SignButton = styled(Text)`
  margin-top: ${verticalScale(10)}px;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  height: ${verticalScale(20)}px;
  width: ${scale(315)}px;
  border-radius: 20;
`;

export const SupportContainer = styled(View)`
  margin-top: ${verticalScale(20)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SignWithContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const SignWithText = styled(Text)`
  color: ${(props) => props.theme.main};
`;

export const SignWithLine = styled(View)`
  border-top: 10px solid ${(props) => props.theme.main};
  width: 40px;
`;
