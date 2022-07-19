import styled from 'styled-components';
import { Pressable, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const HomeView = styled(Pressable)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const HomeHeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${verticalScale(40)}px;
  margin: 0 ${scale(20)}px;
  margin-top: ${verticalScale(35)}px;
`;

export const HomeProfileContainer = styled(View)`
  display: flex;
  flex-direction: column;
`;
