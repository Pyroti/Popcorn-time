import { Text as RNText, TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components';

export const Text = styled(RNText)`
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;

export const TextInput = styled(RNTextInput)`
  font-family: ${(props) => props.theme.fonts.poppinsRegular};
`;
