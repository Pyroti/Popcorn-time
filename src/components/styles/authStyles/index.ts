import styled from 'styled-components';
import { View, Pressable } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Text } from '../globalStyled';
import { fontSize } from '../../../constants/fontSize';

export const AuthView = styled(Pressable)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const AuthTitle = styled(Text)`
  font-size: ${fontSize.extralarge};
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
  font-size: ${fontSize.small};
`;

export const SingUpButton = styled(Text)`
  color: ${(props) => props.theme.colors.main};
  font-size: ${fontSize.regular};
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
  margin-top: ${verticalScale(20)}px;
`;

export const SignWithText = styled(Text)`
  color: ${(props) => props.theme.main};
`;
