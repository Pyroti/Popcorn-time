import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { verticalScale } from 'react-native-size-matters';
import { Pressable } from 'react-native';
import { Text } from '../../components/styles/globalStyled';

export const ProfileView = styled(Pressable)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ProfileGradient = styled(LinearGradient)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${verticalScale(220)}px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  color: ${(props) => props.theme.colors.white};
`;

export const ProfileGradientText = styled(Text)`
  color: ${(props) => props.theme.colors.white};
`;
