import styled from 'styled-components';
import { View, Pressable } from 'react-native';
import { Text } from '../../../globalStyled';

export const AuthView = styled(Pressable)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
`;

export const AuthTitle = styled(Text)`
  font-size: 26px;
  color: ${(props) => props.theme.main};
  margin-bottom: 50px;
`;

export const AuthTextInputContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Spoiler = styled(Text)`
  color: ${(props) => props.theme.grayText};
  font-size: 14px;
`;

export const SingUpButton = styled(Text)`
  color: ${(props) => props.theme.main};
  font-size: 14px;
  margin-left: 5px;
`;

export const SignButton = styled(Text)`
  margin-top: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.white};
  text-align: center;
  height: 20px;
  width: 350px;
  border-radius: 20;
`;

export const SupportContainer = styled(View)`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
