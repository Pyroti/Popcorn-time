import { View } from 'react-native';
import styled from 'styled-components';
import { Text, TextInput } from '../../../../globalStyled';

export const ATextInput = styled(TextInput)`
  color: ${(props) => props.theme.black};
  width: 77%;
  margin: 10px 0;
`;

export const AView = styled(View)<{ isFocused: boolean }>`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => (props.isFocused ? props.theme.black : props.theme.textGray)};
  border-radius: 20px;
  margin: 15px 0;
  padding: 3px 0;
`;

export const AViewLeftContent = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AIcon = styled(View)`
  margin: 0 8px;
`;

export const AErrorText = styled(Text)`
  color: ${(props) => props.theme.alertRed};
`;

export const ALabelText = styled(Text)`
  color: ${(props) => props.theme.black};
  position: absolute;
  left: 25px;
  top: 5px;
  background-color: ${(props) => props.theme.white};
`;

export const AViewContainer = styled(View)`
  position: relative;
`;
