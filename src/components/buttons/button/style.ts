import { Pressable, View } from 'react-native';
import styled from 'styled-components';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const ButtonPressable = styled(Pressable)`
  width: ${scale(315)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.textGray};
  border-radius: 20px;
  margin: ${Math.round(verticalScale(12))}px 0;
  padding: ${Math.round(verticalScale(10))}px 0;
`;

export const ButtonLeftContent = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled(View)`
  margin: 0 ${Math.round(moderateScale(8))}px;
`;
