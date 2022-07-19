import styled from 'styled-components';
import { Image } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const IconImage = styled(Image)`
  width: ${scale(50)}px;
  height: ${scale(50)}px;
  margin-top: ${verticalScale(20)}px;
`;
