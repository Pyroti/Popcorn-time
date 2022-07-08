import { Text as RNText, TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components';
import Fonts from './src/constants/fonts';

export const Text = styled(RNText)`
  font-family: ${Fonts.PoppinsRegular};
`;

export const TextInput = styled(RNTextInput)`
  font-family: ${Fonts.PoppinsRegular};
`;
